import { Controller, Get, Inject } from '@nestjs/common';
import { RedisInterface } from 'src/services/redis/redis.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('REDIS_CONNECTION') private readonly redisService: RedisInterface,
  ) {}

  @Get('/test')
  async test() {
    await this.redisService.set('test', 'value saved from user controller');

    return this.redisService.get('test');
  }
}
