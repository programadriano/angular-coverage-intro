import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoIndicativaService {

  constructor() { }

  verificaClassificacaoIndicativaPorIdade(classificacaoLivre: boolean, data_nascimento: string, idade: number): boolean {
    if (classificacaoLivre) {
      return true;
    } else {
      let birthday = data_nascimento.split("/");
      let day = Number(birthday[1]);
      let month = Number(birthday[0]);
      let year = Number(birthday[2]);
      return new Date(year + idade, month - 1, day) <= new Date();
    }
  }
}

