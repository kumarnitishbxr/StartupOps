import { createClient } from "redis";
import "dotenv/config";


const redisClient = createClient({
   username: 'default',
   password: process.env.REDIS_PASS,
   socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
   }
});



redisClient.on("connect", () => {
   console.log("Redis connecting...");
});

redisClient.on("ready", () => {
   console.log("Redis connected & ready");
});

redisClient.on("error", (err) => {
   console.error("Redis Client Error:", err);
});

export default redisClient;



