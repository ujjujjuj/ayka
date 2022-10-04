import getClient from "../../../lib/db";
import { addAuthInfo } from "../../../lib/addAuthInfo";

export default async function handler(req, res) {
    await addAuthInfo(req, res);
    const client = await getClient();
    if (!req.user & req.body.all) {
        return res.json({ error: true, message: "Unauthorized" });
    }
    const blogs = await client
        .db()
        .collection("blogs")
        .find(req.body.all ? {} : { published: req.body.true });

    return res.json({ error: false, data: await blogs.toArray() });
}
