import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatesModule } from './states/states.module';
import { PopulationModule } from './population/population.module';

@Module({
  imports: [StatesModule, PopulationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
