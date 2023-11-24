import { API_URL } from '../../../../config'
import axios from 'axios'
import cookie from 'cookie'

export default async (req, res ) => {
    if (req.method === "GET") {
        const cookies = cookie.parse(req.headers.cookie ?? '')

        const access = cookies.access ?? false

        if (access === false) {
            return res.status(403).json({
                error: "User is forbidden from making this request"
            })
        }

        
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }

        const body = JSON.stringify({'token': access})

        try {
            const apiResponse = await axios.post(
                `${API_URL}/auth/jwt/verify/`,
                body,
                config
            )
            if (apiResponse?.status === 200) {
                return res.status(200).json({
                    user: apiResponse?.data?.user
                })
            }else {
                return res.status(apiResponse?.status).json({
                    error: "Failed to authenticate"
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: "Something went wrong"
            })
            
        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            'error' : `Method ${req.method} not allowed.`
        })
    }
}