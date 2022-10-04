import getClient from "./db";
import Cookies from "cookies";
import { ObjectId } from "mongodb";

export const addAuthInfo = async (req, res) => {
    const cookies = new Cookies(req, res);
    req.user = null;
    if (cookies.get("auth") !== undefined) {
        const client = await getClient();
        const user = await client
            .db()
            .collection("users")
            .findOne({ _id: new ObjectId(cookies.get("auth")) });
        if (user != null) {
            req.user = user;
        }
    }
};
