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

  @Get('prod')
  getHelloProd(): string {
    console.log('health check prod');
    return 'I am prod';
  }

  @Get('prod/test')
  getHelloProdTest(): string {
    console.log('prod test');
    return 'I am prod test1';
  }

  @Get('dev')
  getHelloDev(): string {
    console.log('health check dev');
    return 'I am dev';
  }

  @Get('dev/test')
  getHelloDevTest(): string {
    console.log('dev test');
    return 'I am dev test1';
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
