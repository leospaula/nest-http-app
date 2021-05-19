import { Exclude, Expose } from 'class-transformer';

export class StateEntity {
  nome: string;
  
  @Exclude()
  regiao: string;

  @Expose({ name: 'uf' })
  sigla: string;

  @Expose({ name: 'code' })
  id: number;

  constructor(partial: Partial<StateEntity>) {
    Object.assign(this, partial);
  }
}