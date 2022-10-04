import getClient from "../../../lib/db";
import { addAuthInfo } from "../../../lib/addAuthInfo";

export default async function handler(req, res) {
    await addAuthInfo(req, res);
    const client = await getClient();
    if (!req.user) {
        return res.json({ error: true, message: "Unauthorized" });
    }
    const blog = await client.db().collection("blogs").insertOne({
        title: "New Blog Title",
        content: "New Blog Content",
        published: false,
        createdAt: Date.now(),
    });

    return res.json({ error: false, data: { _id: blog.insertedId.toString() } });
}
