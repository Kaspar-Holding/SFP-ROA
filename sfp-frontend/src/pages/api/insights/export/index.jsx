import axios from 'axios'
import cookie from 'cookie'
import { API_URL } from '../../../../config'

export default async (req, res) => {
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
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${access}`,
            }
        }


        const Body = JSON.stringify(req.body)
        try {
            const apiResponse = await axios.post(
                `${API_URL}/api/reports/commission/`,
                Body,
                config
            )

            return res.status(apiResponse.status).json(
                apiResponse?.data
            )

        } catch (error) {
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