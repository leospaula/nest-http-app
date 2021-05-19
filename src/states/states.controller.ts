import { Controller, Get, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { StatesService } from './states.service';
import { StateEntity } from './state.entity';
import { Observable } from 'rxjs';

@Controller('estados')
@UseInterceptors(ClassSerializerInterceptor)
export class StatesController {
  constructor(private statesService: StatesService) {}

  @Get()
  getStates(): Observable<StateEntity[]> {
    return this.statesService.getStates()
  }

  @Get(':uf') 
  getState(@Param('uf') uf): Observable<StateEntity> {
    return this.statesService.findState(uf.toLowerCase())
  }
}
