import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { StateEntity } from './state.entity';

@Injectable()
export class StatesService {
  constructor(private http: HttpService){}

  getStates() {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .pipe(
                map(response => response.data.map(state => new StateEntity(state)))
            );  
  }

  findState(uf) {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .pipe(
                map(response => new StateEntity(response.data.find(state => state.sigla.toLowerCase() == uf)))
            );  
  }
}
