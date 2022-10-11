import getClient from "../../../lib/db";
import { addAuthInfo } from "../../../lib/addAuthInfo";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (!req.body.name || !req.body.email || !req.body.phone || !req.body.message) {
        return res.json({ error: true });
    }
    const client = await getClient();

    await client
        .db()
        .collection("contact")
        .insertOne({ name: req.body.name, email: req.body.email, phone: req.body.phone, message: req.body.message });

    return res.json({ error: false });
}
