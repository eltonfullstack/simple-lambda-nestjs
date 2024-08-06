import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(body: string): object {
    return {
      statusCode: 200,
      message: body || 'Obrigado Senhor!',
    };
  }
}
