import { API_URL } from '../../../../../config';
import cookie from 'cookie'

export default async (req, res) => {
    if (req.method === 'POST') {
        const url = `${API_URL}/api/users/bulk/update/`;
        const cookies = cookie.parse(req.headers.cookie ?? '')

        const access = cookies.access ?? false

        if (access === false) {
            return res.status(401).json({
                error: "User is not authorized to make this request"
            })
        }


        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${access}`,
            }
        });
        const reader = response.body.getReader();

        const stream = new ReadableStream({
            start(controller) {
                function push() {
                    reader.read().then(({ done, value }) => {
                        if (done) {
                            controller.close();
                            return;
                        }
                        controller.enqueue(value);
                        push();
                    });
                }
                push();
            },
        });

        const writableStream = new WritableStream({
            write(chunk) {
                // Process the received chunk of data
                console.log(chunk);
                // Send the chunk as a streaming response to the frontend
                res.write(chunk);
            },
        });

        const responseHeaders = {
            'Content-Type': 'application/json',
        };

        res.writeHead(200, responseHeaders);
        await stream.pipeTo(writableStream);
        res.end();
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({
            error: `Method ${req.method} not allowed.`,
        });
    }
};