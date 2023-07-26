import { Module } from '@nestjs/common';
import { ParteQueEnviaController } from './parte-que-envia.controller';
import { ParteQueEnviaUseCase } from './parte-que-envia.usecase';
import { DataDispatcherModule } from 'src/bridges/data-dispatcher.module';
import { DataDispatcherEnum } from 'src/bridges/data-dispatcher.types';

@Module({
  imports: [
    DataDispatcherModule.register({
      dispatcherService: DataDispatcherEnum.FIFO,
    }),
  ],
  controllers: [ParteQueEnviaController],
  providers: [ParteQueEnviaUseCase],
})
export class ParteQueEnviaModule {}
