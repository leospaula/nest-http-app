import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PopulationService {
  constructor(private http: HttpService){}

  getPopulationData(code) {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/' + code)
            .pipe(
                map(response => response.data.projecao.populacao)
            ).toPromise();  
  }
}