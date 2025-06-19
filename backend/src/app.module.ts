import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarambarController } from './controllers/carambar/carambar.controller';
import { CarambarService } from './services/carambar/carambar.service';

@Module({
  imports: [],
  controllers: [CarambarController],
  providers: [CarambarService],
})
export class AppModule { }
