import { Module } from '@nestjs/common';
import { AppController } from './azure/app.controller';
import { AppService } from './azure/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
