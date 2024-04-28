import { Controller, Get, Inject } from '@nestjs/common';
import { RedisInterface } from 'src/services/redis/redis.interface';

@Controller('websocket')
export class WebsocketController {
  constructor(
    @Inject('REDIS_CONNECTION') private readonly redisService: RedisInterface,
  ) {}

  @Get('/test')
  async test() {
    await this.redisService.set(
      'test',
      'value saved from websocket controller',
    );

    return this.redisService.get('test');
  }
}
