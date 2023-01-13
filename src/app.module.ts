import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UtilsModule } from "./modules/utils/utils.module";
import { ApiModule } from "./modules/api/api.module";
import { UserModule } from "./modules/user/user.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./modules/auth/auth.module";
import { DocsModule } from "./modules/docs/docs.module";
import { DatasetModelModule } from "./modules/dataset-model/dataset-model.module";
import { UserMessageModule } from "./modules/user-message/user-message.module";
import { SocketGateway } from "@modules/socket/socket.gateway";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env.development",
      isGlobal: true,
      expandVariables: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {}),
    UserModule,
    UtilsModule,
    ApiModule,
    AuthModule,
    DocsModule,
    DatasetModelModule,
    UserMessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
