import getClient from "../../lib/db";

export default async function handler(req, res) {
    console.log(req.body);
    if (!req.body.name || !req.body.email || !req.body.phone || !req.body.message || !req.body.city) {
        return res.json({ error: true });
    }
    const client = await getClient();

    await client.db().collection("contact").insertOne({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        city: req.body.city,
        type: req.body.type,
    });

    return res.json({ error: false });
}
