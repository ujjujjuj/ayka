import { addAuthInfo } from "../../../lib/addAuthInfo";
import getClient from "../../../lib/db";
import { ObjectId } from "mongodb";
import { hashPassword } from "../../../lib/auth";

export default async function handler(req, res) {
    await addAuthInfo(req, res);
    if (!req.user || req.user.username !== "admin") {
        return res.json({ error: true, message: "unauthorized" });
    }

    const client = await getClient();
    let writes = [];
    for (const id in req.body.updates) {
        if (id.slice(0, 3) == "new") {
            writes.push({
                insertOne: {
                    document: { ...req.body.updates[id], password: hashPassword("aykaforthepeople") },
                },
            });
        } else if (req.body.updates[id].username !== "admin") {
            writes.push({
                updateOne: {
                    filter: { _id: new ObjectId(id) },
                    update: {
                        $set: req.body.updates[id],
                    },
                },
            });
        }
    }
    for (const id in req.body.deleted) {
        writes.push({
            deleteOne: {
                filter: { _id: new ObjectId(req.body.deleted[id]) },
            },
        });
    }

    await client.db().collection("users").bulkWrite(writes);

    res.json({ error: false });
}
