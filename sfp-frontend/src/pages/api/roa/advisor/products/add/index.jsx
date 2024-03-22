import axios from 'axios'
import cookie from 'cookie'
import { API_URL } from '../../../../../../config'

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
        const body = JSON.stringify(req?.body?.product)
        try {
            const apiResponse = await axios.post(
                `${API_URL}/api/roa/advisor/products/${req?.body?.advisorId}/`,
                body,
                config,
            )
            return res.status(200).json({ "success": "Success" })

        } catch (error) {
            console.log(error)
            return res.status(error.response.status).json({
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