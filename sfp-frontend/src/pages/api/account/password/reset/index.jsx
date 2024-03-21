import { API_URL } from '../../../../../config'
import axios from 'axios'

export default async (req, res) => {
    if (req.method === "POST") {
        const {
            email
        } = req.body

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }


        const Body = JSON.stringify({
            email
        })
        try {
            await axios.post(
                `${API_URL}/api/email/password/reset/`,
                Body,
                config
            )


            return res.status(200).json({
                success: 'Email sent if user exists.'
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
            'error': `Method ${req.method} not allowed.`
        })
    }
}