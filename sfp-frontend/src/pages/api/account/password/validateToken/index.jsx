import { API_URL } from '../../../../config'
import axios from 'axios'

export default async (req, res ) => {
    if (req.method === "POST") {


        const {
            uid,
            token
        } = req.body

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        }

        const Body = JSON.stringify({
            uid, 
            token
        })
        try {
            
            const response = await axios.post(
                `${API_URL}/api/email/validateUidToken/`,
                Body,
                config
            )
            

            return res.status(200).json({
                success: response.data.message
            })

        } catch (error) {
            return res.status(404).json({
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