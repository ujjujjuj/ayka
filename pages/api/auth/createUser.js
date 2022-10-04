import getClient from "../../lib/db";

export default async function handler(req, res) {
    const client = await getClient();
    res.json({ ok: 1 });
}
