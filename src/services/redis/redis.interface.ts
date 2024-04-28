export interface RedisInterface {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<string>;
}
