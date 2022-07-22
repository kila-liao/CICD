import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log('health check10');
    return this.appService.getHello();
  }

  @Get('dead')
  getDead(): string {
    // let a = [];
    // for (let i = 0; i < 100000000000000000; i++) {
    //   a.push(i);
    // }
    return '';
  }

  @Get('env')
  getEnv() {
    return process.env;
  }
}
