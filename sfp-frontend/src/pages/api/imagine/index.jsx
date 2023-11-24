import { API_URL } from '../../../../config'
import axios from 'axios'
import FormData from 'form-data'

export default async (req, res ) => {
    if (req.method === "POST") {


        let data = new FormData();
        data.append('prompt', req?.body?.prompt);
        data.append('aspect_ratio', '4:3');
        data.append('style_id', '27');

        const config = {
            headers: { 
              'Authorization': 'Bearer vk-vgZP3oqs1tnCcM1NnwR2ltYDc2F3PwHgqCpl2Dj9XLxBCPv'
            }
        }

        try {
            const apiResponse = await axios.post(
                `https://api.vyro.ai/v1/imagine/api/generations`,
                data,
                config
            )
            
            if (apiResponse?.status === 200) {
                const filename = `${Date.now()}.png`;

                const fs = require('fs')

                const imageStream = apiResponse.data;

                fs.writeFile(filename, imageStream, "binary", (err) => {
                    if (err) {
                      console.error("Error saving image:", err);
                    } else {
                      console.log("Image saved successfully.");
                    }
                });

                return res.status(apiResponse.status).json(
                    {
                        success: "Found.",
                        data: apiResponse?.data,
                    }
                )

            } else{
                return res.status(apiResponse?.status).json({
                    error: data
                })
            }

        } catch (error) {
            console.log(error)
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