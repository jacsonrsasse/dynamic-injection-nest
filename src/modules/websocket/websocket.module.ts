import { Module } from '@nestjs/common';
import { WebsocketController } from './websocket.controller';
import { RedisWebsocketConnectionService } from 'src/services/redis/redis-websocket-connection.service';
import { SqsFifoTwoService } from 'src/services/aws/sqs-fifo-two.service';

@Module({
  controllers: [WebsocketController],
  providers: [
    {
      provide: 'REDIS_CONNECTION',
      useClass: RedisWebsocketConnectionService,
    },
    {
      provide: 'SQS_FIFO',
      useClass: SqsFifoTwoService,
    },
  ],
})
export class WebsocketModule {}
