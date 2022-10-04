import getClient from "../../../lib/db";
import Cookies from "cookies";
import { comparePassword, cookieSecret } from "../../../lib/auth";

export default async function handler(req, res) {
    const client = await getClient();
    if (!req.body.username || !req.body.password) {
        return res.json({ error: true, message: "Please provide username and password" });
    }
    const user = await client.db().collection("users").findOne({ username: req.body.username });
    if (user == null || !comparePassword(req.body.password, user.password)) {
        return res.json({ error: true, message: "Incorrect username or password" });
    }
    const cookies = new Cookies(req, res, { keys: [cookieSecret] });

    cookies.set("auth", user._id, { signed: true });

    res.json({ error: false });
}
