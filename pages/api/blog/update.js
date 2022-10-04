import getClient from "../../../lib/db";
import { addAuthInfo } from "../../../lib/addAuthInfo";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    await addAuthInfo(req, res);
    const client = await getClient();
    if (!req.user) {
        return res.json({ error: true, message: "Unauthorized" });
    }
    await client
        .db()
        .collection("blogs")
        .updateOne(
            { _id: new ObjectId(req.body._id) },
            {
                $set: {
                    title: req.body.title,
                    content: req.body.content,
                    published: req.body.publish === "on",
                },
            }
        );

    return res.json({ error: false });
}
