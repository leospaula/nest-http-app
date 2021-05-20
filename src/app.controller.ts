import { Controller, Get, Logger, Param } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  logger = new Logger('AppController');

  @Client({
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    },
  })
  client: ClientProxy;

  @Get('estados')
  getStates(): Observable<any> {
    this.logger.log('client#send -> topic: "get-states"');
    console.log(this.client)
    return this.client.send('get-states', {});
  }

  @Get('estados/:uf')
  async getStateByUf(@Param('uf') uf: string): Promise<any> {
    this.logger.debug(`client#send -> topic: "get-states", uf: ${uf.toLowerCase()}`);
    return this.client.send('get-states', { uf });
  }

  @Get('populacao/:uf')
  async getPopulationByUf(@Param('uf') uf: string): Promise<any> {
    this.logger.debug(`client#send -> topic: "get-population", uf: ${uf.toLowerCase()}`);
    return this.client.send('get-population', { uf });
  }

  async onModuleInit() {
    await this.client.connect();
    console.log("Nats connected!");
  }
}
