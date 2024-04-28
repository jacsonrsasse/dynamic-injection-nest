import { Module } from '@nestjs/common';
import { RedisUserDataService } from './redis/redis-user-data.service';
import { RedisWebsocketConnectionService } from './redis/redis-websocket-connection.service';
import { SqsFifoOneService } from './aws/sqs-fifo-one.service';
import { SqsFifoTwoService } from './aws/sqs-fifo-two.service';

@Module({
  providers: [
    RedisUserDataService,
    RedisWebsocketConnectionService,
    SqsFifoOneService,
    SqsFifoTwoService,
  ],
  exports: [
    RedisUserDataService,
    RedisWebsocketConnectionService,
    SqsFifoOneService,
    SqsFifoTwoService,
  ],
})
export class ServiceModule {}
