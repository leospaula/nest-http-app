import { Module, HttpModule } from '@nestjs/common';
import { PopulationService } from './population.service';
import { PopulationController } from './population.controller';
import { StatesModule } from '../states/states.module'

@Module({
  imports: [HttpModule, StatesModule],
  controllers: [PopulationController],
  providers: [PopulationService],
})
export class PopulationModule {}
