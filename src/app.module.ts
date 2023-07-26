import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParteQueEnviaModule } from './modules/parte-que-envia/parte-que-envia.module';

@Module({
  imports: [ParteQueEnviaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
