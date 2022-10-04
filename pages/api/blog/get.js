import getClient from "../../../lib/db";
import { addAuthInfo } from "../../../lib/addAuthInfo";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    await addAuthInfo(req, res);
    const client = await getClient();
    const blog = await client
        .db()
        .collection("blogs")
        .findOne({ _id: new ObjectId(parseInt(req.query.id)) });

    return res.json({ error: false, data: blog });
}
