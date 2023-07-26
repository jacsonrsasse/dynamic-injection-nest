import { DynamicModule, Module } from '@nestjs/common';
import { DataDispatcherBridge } from './data-dispatcher.bridge';
import {
  DataDispatcherEnum,
  dataDispatcherMapper,
  dataDispatcherToken,
} from './data-dispatcher.types';

interface DataDispatcherModuleOptions {
  dispatcherService: DataDispatcherEnum;
}

@Module({})
export class DataDispatcherModule {
  static register(options: DataDispatcherModuleOptions): DynamicModule {
    const dispatcher = dataDispatcherMapper.get(options.dispatcherService);

    return {
      module: DataDispatcherModule,
      providers: [
        DataDispatcherBridge,
        {
          provide: dataDispatcherToken,
          useClass: dispatcher,
        },
      ],
      exports: [DataDispatcherBridge],
    };
  }
}
