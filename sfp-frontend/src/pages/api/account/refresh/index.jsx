import { API_URL } from '../../../../config'
import axios from 'axios'
import cookie from 'cookie'

export default async (req, res) => {
    if (req.method === "GET") {
        const cookies = cookie.parse(req.headers.cookie ?? '')

        const refresh = cookies.refresh ?? false

        if (refresh === false) {
            return res.status(403).json({
                error: "User is forbidden from making this request"
            })
        }


        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const body = JSON.stringify({ 'refresh': refresh })

        try {
            const apiResponse = await axios.post(
                `${API_URL}/auth/jwt/refresh/`,
                body,
                config
            )
            if (apiResponse?.status === 200) {
                res.setHeader(
                    'Set-Cookie',
                    [
                        cookie.serialize(
                            'access', apiResponse?.data?.access, {
                            httpOnly: true,
                            secure: process.env.NEXT_ENV !== "development",
                            maxAge: 60 * 60 * 8,
                            sameSite: 'strict',
                            path: '/api/'
                        }
                        )
                    ]
                )

                return res.status(200).json({
                    user: apiResponse?.data?.user
                })
            } else {
                return res.status(apiResponse?.status).json({
                    error: "Failed to authenticate"
                })
            }
        } catch (error) {
            return res.status(error.response.status).json({
                error: "Something went wrong"
            })

        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            'error': `Method ${req.method} not allowed.`
        })
    }
}