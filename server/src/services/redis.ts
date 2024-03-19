import { Redis } from "ioredis";
import { REDIS_CACHE_KEY, REDIS_PORT } from "../utils/utils";
import { Data } from "../utils/type";

export const redis = new Redis({ port: REDIS_PORT });

export const setCacheValue = async (data: any) => {
  await redis.set(REDIS_CACHE_KEY, JSON.stringify(data), "EX", 60 * 60);
};

export const getCacheValue = async () => {
  const cache = await redis.get(REDIS_CACHE_KEY);

  if (cache) {
    const data: Data[] = JSON.parse(cache);

    return data;
  }
  return null;
};

export const removeCacheValue = async () => {
  await redis.del(REDIS_CACHE_KEY);
};
