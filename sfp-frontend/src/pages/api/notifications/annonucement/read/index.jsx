import { API_URL } from '../../../../../config'
import axios from 'axios'
import cookie from 'cookie'

export default async (req, res) => {
    if (req.method == "POST") {
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
        try {
            const apiResponse = await axios.get(
                `${API_URL}/api/notifications/read/${req.body}/`,
                config
            )
            if (apiResponse?.status === 200) {
                return res.status(200).json({
                    data: apiResponse?.data
                })
            } else {
                return res.status(apiResponse?.status).json({
                    error: "Something went wrong"
                })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({
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