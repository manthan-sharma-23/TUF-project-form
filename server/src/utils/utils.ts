import { config } from "dotenv";

config();
export const PORT = Number(process.env.PORT)||3002;
export const REDIS_URL = process.env.REDIS_URL || "";
export const DATABASE_URL = process.env.DATABASE_URL || "";
export const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
export const REDIS_CACHE_KEY = "responses";
