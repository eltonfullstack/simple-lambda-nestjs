import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: string): object {
    return this.appService.getHello(body);
  }
}
