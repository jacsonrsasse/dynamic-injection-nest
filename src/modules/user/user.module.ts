import { Module } from '@nestjs/common';
import { RedisUserDataService } from 'src/services/redis/redis-user-data.service';
import { UserController } from './user.controller';
import { SqsFifoOneService } from 'src/services/aws/sqs-fifo-one.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'REDIS_CONNECTION',
      useClass: RedisUserDataService,
    },
    {
      provide: 'SQS_FIFO',
      useClass: SqsFifoOneService,
    },
  ],
})
export class UserModule {}
