import { Redis } from "ioredis";
import { promisify } from "util";

export const redisCliente = new Redis({
  host: "redis_application",
  port: 6379,
});

export function getRedis(value: string) {
  const syncRedisGet = promisify(redisCliente.get).bind(redisCliente);
  return syncRedisGet(value);
}

export function setRedis(key: string, value: string) {
  const syncRedisSet = promisify(redisCliente.set).bind(redisCliente);
  return syncRedisSet(key, value);
}
