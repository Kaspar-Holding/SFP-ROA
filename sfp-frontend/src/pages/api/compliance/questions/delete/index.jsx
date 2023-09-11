import { API_URL } from '@/config'
import axios from 'axios'
import cookie from 'cookie'

export default async (req, res ) => {
    if (req.method === "POST") {
        const cookies = cookie.parse(req.headers.cookie ?? '')

        const access = cookies.access ?? false

        if (access === false) {
            return res.status(401).json({
                error: "User is not authorized to make this request"
            })
        }

        
        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `JWT ${access}`,
            }
        }

        // console.log(req.body)

        try {
            const apiResponse = await axios.delete(
                `${API_URL}/api/compliance/arc/questions/${req.body?.id}/`,
                config
            )
            
            if (apiResponse?.status === 204) {
                
                return res.status(apiResponse.status).json(
                    {
                        success: "Successfully deleted.",
                        data: apiResponse?.data,
                    }
                )

            } else{
                return res.status(apiResponse?.status).json({
                    error: data
                })
            }

        } catch (error) {
            return res.status(error?.response?.status).json({
                error: error?.response?.data
            })
            
        }
        return res.status(500).json({
            error: "Something went wrong"
        })
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            'error' : `Method ${req.method} not allowed.`
        })
    }
}