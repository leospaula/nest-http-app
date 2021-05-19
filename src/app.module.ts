import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatesModule } from './states/states.module';
import { PopulationController } from './population/population.controller';
import { PopulationService } from './population/population.service';
import { PopulationModule } from './population/population.module';

@Module({
  imports: [StatesModule, PopulationModule],
  controllers: [AppController, PopulationController],
  providers: [AppService, PopulationService],
})
export class AppModule {}
