import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { WebsocketModule } from './modules/websocket/websocket.module';

@Module({
  imports: [UserModule, WebsocketModule],
})
export class AppModule {}
