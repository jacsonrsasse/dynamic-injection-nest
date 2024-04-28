import { createClient } from 'redis';
import { RedisInterface } from './redis.interface';

export abstract class RedisBaseService implements RedisInterface {
  protected readonly redisClient;

  constructor(
    private readonly redisUrl: string,
    private readonly redisDb: number,
  ) {
    this.redisClient = createClient({
      url: this.redisUrl,
      database: this.redisDb,
    });
    this.redisClient.connect();
  }

  set(key: string, value: string): Promise<string> {
    return this.redisClient.set(key, value);
  }

  get(key: string): Promise<string> {
    return this.redisClient.get(key);
  }
}
