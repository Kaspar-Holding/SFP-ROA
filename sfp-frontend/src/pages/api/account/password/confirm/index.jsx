import { API_URL } from '../../../../config'
import axios from 'axios'

export default async (req, res ) => {
    if (req.method === "POST") {
        const {
            uid,
            token,
            new_password,
            re_new_password
        } = req.body

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }

        const Body = JSON.stringify({ 
            uid,
            token,
            new_password,
            re_new_password
        })
        console.log(Body)
        try {
            const apiResponse = await axios.post(
                `${API_URL}/auth/users/reset_password_confirm/`,
                Body,
                config
            )
            
            if (apiResponse?.status === 200) {

                return res.status(apiResponse.status).json(
                    apiResponse?.data
                )

            } else{
                return res.status(apiResponse?.status).json({
                    error: data
                })
            }

        } catch (error) {
            // console.log(error)
            return res.status(error?.response?.status).json({
                error: error?.response?.data
            })
            
        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            'error' : `Method ${req.method} not allowed.`
        })
    }
}