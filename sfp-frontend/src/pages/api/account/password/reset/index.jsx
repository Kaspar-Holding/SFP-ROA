import { API_URL } from '@/config'
import axios from 'axios'

export default async (req, res ) => {
    if (req.method === "POST") {
        const {
            email
        } = req.body

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }


        const Body = JSON.stringify({ 
            email
        })
        try {
            await axios.post(
                `${API_URL}/auth/users/reset_password/`,
                Body,
                config
            )
            

            return res.status(200).json({
                success: "Email was sent"
            })

        } catch (error) {
            console.log(error?.response)
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