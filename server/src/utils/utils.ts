import { config } from "dotenv";

config();
export const PORT = Number(process.env.PORT) || 3002;
export const REDIS_URL =
  "redis://:4xLENJLEoqdNiMdWoqlCE7dStvHoUSF0@redis-11894.c305.ap-south-1-1.ec2.cloud.redislabs.com:11894";
export const DATABASE_URL = process.env.DATABASE_URL || "";
export const REDIS_PORT = Number(process.env.REDIS_PORT) || 6375;
export const REDIS_RESPONSES_CACHE_KEY = "responses";
export const REDIS_LANGUAGES_CACHE_KEY = "languages";
export const JUDGE_API =
  "https://judge0-extra-ce.p.rapidapi.com";
export const Judge0AuthHeaders = {
  "X-RapidAPI-Host": "judge0-extra-ce.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY!,
};
