import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_URL,
});

client.on("error", function (err) {
  throw err;
});

export const connectRedis = async () => {
  try {
    await client.connect();
    console.log("Connected to Redis");
  } catch (error) {
    console.log("Cannot connected to Redis, due to:", error.message);
  }
};
