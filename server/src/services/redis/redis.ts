import { Redis } from "ioredis";
import { REDIS_PORT } from "../../utils/utils";

export const redis = new Redis({ port: REDIS_PORT });