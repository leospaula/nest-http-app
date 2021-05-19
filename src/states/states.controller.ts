import { Controller, Get, Param } from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('estados')
export class StatesController {
  constructor(private statesService: StatesService) {}

  @Get()
  getStates() {
    return this.statesService.getStates()
  }

  @Get(':uf') 
  getState(@Param() params) {
    return this.statesService.findState(params.uf.toLowerCase())
  }
}
