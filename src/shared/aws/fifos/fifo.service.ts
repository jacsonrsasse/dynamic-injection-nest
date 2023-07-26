import { Injectable } from '@nestjs/common';
import { DataDispatcherServiceInterface } from 'src/bridges/data-dispatcher-service.interface';

@Injectable()
export class FifoService implements DataDispatcherServiceInterface {
  send(payload: any) {
    console.log('[FifoService]', JSON.stringify(payload));
  }
}
