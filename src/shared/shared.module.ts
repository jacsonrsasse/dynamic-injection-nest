import { Module } from '@nestjs/common';
import { FifoService } from './aws/fifos/fifo.service';
import { ApiService } from './api/api.service';

@Module({
  providers: [FifoService, ApiService],
  exports: [FifoService, ApiService],
})
export class SharedModule {}
