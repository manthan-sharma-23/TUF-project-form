import { config } from "dotenv";

config();
export const PORT = Number(process.env.PORT) || 3002;
export const REDIS_URL = process.env.REDIS_URL || "";
export const DATABASE_URL = process.env.DATABASE_URL || "";
export const REDIS_PORT = Number(process.env.REDIS_PORT) || 6375;
export const REDIS_RESPONSES_CACHE_KEY = "responses";
export const REDIS_LANGUAGES_CACHE_KEY = "languages";
export const JUDGE_API = "https://judge0-extra-ce.p.rapidapi.com";
export const Judge0AuthHeaders = {
  "X-RapidAPI-Host": "judge0-extra-ce.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY!,
};

export const oneTimeFetchTake = 10;
