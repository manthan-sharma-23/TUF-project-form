import { Redis } from "ioredis";
import {
  REDIS_LANGUAGES_CACHE_KEY,
  REDIS_PORT,
  REDIS_RESPONSES_CACHE_KEY,
} from "../../utils/utils";
import { Data, Language } from "../../utils/type";
import { redis } from "./redis";

export const setResponseCacheValue = async (data: any) => {
  await redis.set(
    REDIS_RESPONSES_CACHE_KEY,
    JSON.stringify(data),
    "EX",
    60 * 60
  );
};

export const getResponseCacheValue = async () => {
  const cache = await redis.get(REDIS_RESPONSES_CACHE_KEY);

  if (cache) {
    const data: Data[] = JSON.parse(cache);

    return data;
  }
  return null;
};

export const removeResponseCacheValue = async () => {
  await redis.del(REDIS_RESPONSES_CACHE_KEY);
};

export const setLanguagesCacheValue = async (languages: any) => {
  await redis.set(
    REDIS_LANGUAGES_CACHE_KEY,
    JSON.stringify(languages),
    "EX",
    60 * 60 * 24 * 2
  );
};

export const getLanguagesCacheValue = async () => {
  const data = await redis.get(REDIS_LANGUAGES_CACHE_KEY);
  if (!data) {
    return null;
  }

  const languages: Language[] = JSON.parse(data);

  return languages;
};
