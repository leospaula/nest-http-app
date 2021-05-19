import { Module, HttpModule } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';

@Module({
  imports: [HttpModule],
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {}
