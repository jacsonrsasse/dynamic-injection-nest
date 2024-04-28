import { Injectable } from '@nestjs/common';
import { RedisBaseService } from './redis-base.service';

@Injectable()
export class RedisWebsocketConnectionService extends RedisBaseService {
  constructor() {
    super(
      process.env.REDIS_URL,
      Number(process.env.REDIS_WEBSOCKET_CONNECTIONS_DB),
    );
  }
}
