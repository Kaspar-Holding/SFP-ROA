import { API_URL } from '../../../../config'
import axios from 'axios'
import cookie from 'cookie'

export default async (req, res) => {
    if (req.method === "POST") {
        const {
            email,
            password
        } = req.body

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const Body = JSON.stringify({
            email,
            password
        })
        try {
            const apiResponse = await axios.post(
                `${API_URL}/auth/jwt/create/`,
                Body,
                config
            )

            // const apiResponse = await fetch(
            //     `${API_URL}/auth/jwt/create/`,
            //     {
            //         method: 'POST',
            //         headers:  {
            //             'Content-Type' : 'application/json',
            //             'Accept' : 'application/json'
            //         },
            //         body: Body
            //     }
            // )

            // const data = await apiResponse.json()

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
                        ),
                        cookie.serialize(
                            'refresh', apiResponse?.data?.refresh, {
                            httpOnly: true,
                            secure: process.env.NEXT_ENV !== "development",
                            maxAge: 60 * 60 * 24,
                            sameSite: 'strict',
                            path: '/api/'
                        }
                        )
                    ]
                )

                return res.status(apiResponse.status).json(
                    {
                        success: "Logged in successfully"
                    }
                )

            } else {
                return res.status(apiResponse?.status).json({
                    error: data
                })
            }

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                res.status(error.response.status).json({ error: error.response.data });
            } else if (error.request) {
                // The request was made but no response was received
                res.status(500).json({ error: 'No response received' });
            } else {
                // Something happened in setting up the request that triggered an error
                res.status(500).json({ error: 'Error setting up the request' });
            }

        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            'error': `Method ${req.method} not allowed.`
        })
    }
}