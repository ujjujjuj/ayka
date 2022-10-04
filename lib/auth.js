import bcrypt from "bcryptjs";
import crypto from "crypto";

const SALT_ROUNDS = 10;
let _cookieSecret;
if (process.env.NODE_ENV == "development") {
    _cookieSecret = "testing";
} else {
    _cookieSecret = crypto.randomBytes(16).toString("hex");
}

export const cookieSecret = _cookieSecret;

export const hashPassword = (pass) => {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(SALT_ROUNDS));
};

export const comparePassword = bcrypt.compareSync;
