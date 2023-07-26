import { Module } from '@nestjs/common';
import { ParteQueEnviaModule } from './modules/parte-que-envia/parte-que-envia.module';

@Module({
  imports: [ParteQueEnviaModule],
})
export class AppModule {}
