import { Module } from '@nestjs/common';
import { AppController } from './azure/app.controller';
import { AppService } from './azure/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
