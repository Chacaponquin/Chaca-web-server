import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsModule } from './modules/utils/utils.module';
import { ApiModule } from './modules/api/api.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UtilsModule, ApiModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
