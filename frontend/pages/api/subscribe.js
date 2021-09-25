export default async function handler(req, res) {
    const apiResponse = await fetch(`${process.env.API_BASE_URL}/subscribe/`, {
        body: JSON.stringify({ "email": req.body.email }),
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.API_KEY
        },
        method: 'POST'
    });
    console.log(await apiResponse.json());
    console.log(apiResponse.status);
    res.status(apiResponse.status).json({});
    res.end();
}
