import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataDispatcherServiceInterface } from './data-dispatcher-service.interface';
import { dataDispatcherToken } from './data-dispatcher.types';

@Injectable()
export class DataDispatcherBridge {
  constructor(
    @Inject(dataDispatcherToken)
    private readonly dispatcherService: DataDispatcherServiceInterface,
  ) {
    if (!this.dispatcherService.send) {
      throw new InternalServerErrorException(
        'Your injected class in DataDispatcherBridge must have a "send" method',
      );
    }
  }

  async dispatch(payload: any) {
    this.dispatcherService.send(payload);
  }
}
