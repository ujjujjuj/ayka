import getClient from "../../../lib/db";
import { addAuthInfo } from "../../../lib/addAuthInfo";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    await addAuthInfo(req, res);
    const client = await getClient();
    if (!req.user) {
        return res.json({ error: true, message: "Unauthorized" });
    }

    const imgBuffer = Buffer.from(req.body.file, "base64");
    await client.db().collection("images").insertOne({ data: imgBuffer });

    return res.json({ error: false });
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "12mb",
        },
    },
};
