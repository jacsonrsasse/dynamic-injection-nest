import { Injectable } from '@nestjs/common';
import { DataDispatcherBridge } from 'src/bridges/data-dispatcher.bridge';

@Injectable()
export class ParteQueEnviaUseCase {
  constructor(private readonly dataDispatcherBridge: DataDispatcherBridge) {}

  call() {
    this.dataDispatcherBridge.dispatch({
      success: true,
    });
  }
}
