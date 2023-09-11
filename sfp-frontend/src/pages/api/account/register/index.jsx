import { API_URL } from '@/config'
import axios from 'axios'

export default async (req, res) => {
    if (req.method == "POST") {
        const {
            first_name,
            last_name,
            email,
            password,
            re_password
        } = req.body

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }

        const Body = JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            re_password
        })

        try {  
            const apiResponse = await axios.post(
                `${API_URL}/auth/users/`, 
                Body,
                config
            )

            if (apiResponse?.status === 201) {
                return res.status(201).json({
                    success: "Successfully created"
                })
            }else {
                return res.status(apiResponse?.status).json({
                    error: apiResponse?.data
                })

            }
            
        } catch (error) {
            return res.status(500).json({
                "error" : "Something went wrong while registering the account."
            })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            'error' : `Method ${req.method} not allowed.`
        })
    }
}