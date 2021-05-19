import { Controller, Get, Param } from '@nestjs/common';
import { PopulationService } from './population.service';
import { StatesService } from '../states/states.service';

@Controller('populacao')
export class PopulationController {
  constructor(
    private populationService: PopulationService,
    private statesService: StatesService) {}

  @Get(':uf')
  async getStates(@Param('uf') uf) {
    const code = await this.statesService.findState(uf.toLowerCase()).toPromise()
    const population = await this.populationService.getPopulationData(code.id)
    return {uf: uf.toUpperCase(), populacao: population }
  }
}
