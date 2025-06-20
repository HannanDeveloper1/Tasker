import jwt from "jsonwebtoken";
import crypto from "crypto";

import { client } from "../../config/redis";

export const issueRefreshToken = async (payload) => {
  try {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
  } catch (error) {
    console.log("Error generating refresh token:", error.message);
  }
};

export const issueAccessToken = async (id) => {
  try {
    const token = crypto.randomBytes(32).toString("hex");
    const key = `accessToken:${token}`;
    await client.set(key, id, { EX: 15 * 60 });
    return token;
  } catch (error) {
    console.log("Error generating access token:", error.message);
  }
};
