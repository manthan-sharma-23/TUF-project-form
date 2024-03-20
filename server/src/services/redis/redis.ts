import { Redis } from "ioredis";
import { REDIS_PORT, REDIS_URL } from "../../utils/utils";

export const redis = new Redis(REDIS_URL);

export async function ping() {
  const a = await redis.ping();
  return a;
}
