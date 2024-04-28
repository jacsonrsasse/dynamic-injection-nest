import { Injectable } from '@nestjs/common';
import { RedisBaseService } from './redis-base.service';

@Injectable()
export class RedisUserDataService extends RedisBaseService {
  constructor() {
    super(process.env.REDIS_URL, Number(process.env.REDIS_USER_DATA_DB));
  }
}
