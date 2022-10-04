import getClient from "../../../lib/db";
import { comparePassword, hashPassword } from "../../../lib/auth";
import { addAuthInfo } from "../../../lib/addAuthInfo";

export default async function handler(req, res) {
    await addAuthInfo(req, res);
    if (!req.body.oldpassword || !req.body.newpassword) {
        return res.json({ error: true, message: "Please provide the required parameters" });
    }
    if (!comparePassword(req.body.oldpassword, req.user.password)) {
        return res.json({ error: true, message: "The old password is incorrect" });
    }

    console.log(req.user);

    const client = await getClient();
    await client
        .db()
        .collection("users")
        .updateOne(
            { _id: req.user._id },
            {
                $set: {
                    password: hashPassword(req.body.newpassword),
                },
            }
        );

    res.json({ error: false });
}
