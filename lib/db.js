import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error("Please set the MONGODB_URI env variable");
}

const uri = process.env.MONGODB_URI;
const options = {};

const client = new MongoClient(uri, options);

const getClientPromise = new Promise(async (resolve) => {
    await client.connect();
    console.log("Connected to DB");
    resolve(client);
});

const getClient = () => getClientPromise;

export default getClient;
