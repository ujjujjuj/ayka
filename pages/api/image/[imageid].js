import getClient from "../../../lib/db";
import { addAuthInfo } from "../../../lib/addAuthInfo";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const client = await getClient();

    const { imageid } = req.query;

    const image = await client
        .db()
        .collection("images")
        .findOne({ _id: new ObjectId(imageid) });

    if (image == null) {
        return res.send("");
    }

    res.setHeader("Content-Type", "image/png");
    res.send(Buffer.from(image.data, "hex"));
    console.log(image.data);
    console.log(Buffer.from(image.data, "hex"));
}
