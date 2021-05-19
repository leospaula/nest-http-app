import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { StateEntity } from './state.entity';
import { Observable } from 'rxjs';

@Injectable()
export class StatesService {
  constructor(private http: HttpService){}

  getStates(): Observable<StateEntity[]> {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .pipe(
                map(response => response.data.map(state => new StateEntity(state)))
            );  
  }

  findState(uf): Observable<StateEntity> {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .pipe(
              map(response => response.data.map(state => new StateEntity(state)).find(state => state.sigla.toLowerCase() == uf))
            )
  }
}
