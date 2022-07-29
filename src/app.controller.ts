import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const winston = require('winston');
import { LoggingWinston } from '@google-cloud/logging-winston';

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
    return 'I am prod test6';
  }

  @Get('dev')
  getHelloDev(): string {
    console.log('health check dev');
    return 'I am dev';
  }

  @Get('dev/test')
  getHelloDevTest(): string {
    console.log('dev test');
    return 'I am dev test7';
  }

  @Get('dev/log')
  getLog(): string {
    const loggingWinston = new LoggingWinston();
    const logger = winston.createLogger({
      level: 'info',
      transports: [
        new winston.transports.Console(),
        // Add Cloud Logging
        loggingWinston,
      ],
    });
    logger.error('warp nacelles offline');
    logger.info('shields at 99%');
    return 'I am log';
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
