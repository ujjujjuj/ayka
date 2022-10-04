import getClient from "../lib/db.js";
import { hashPassword } from "../lib/password.js";

const main = async () => {

    const client = await getClient();

    if (!process.env.DEFAULT_USER || !process.env.DEFAULT_PASSWORD || !process.env.DEFAULT_NAME) {
        throw new Error("Please set the default account env variables");
    }

    const userExists = await client.db().collection("users").countDocuments({ username: process.env.DEFAULT_USER });

    if (!userExists) {
        await client
            .db()
            .collection("users")
            .insertOne({
                username: process.env.DEFAULT_USER,
                name: process.env.DEFAULT_NAME,
                password: hashPassword(process.env.DEFAULT_PASSWORD),
                position: "President",
            });
        console.log("Inserted record.");
    } else {
        console.log("User exists");
    }
    client.close();
};

main();
