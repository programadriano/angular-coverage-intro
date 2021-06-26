import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoIndicativaService {

  constructor() { }

  verificaClassificacaoIndicativaPorIdade(livre: boolean, data_nascimento: Date, idade: number): boolean {
    if (livre) {
      return true;
    } else {
      let birthday = data_nascimento.toString().split("/");
      let day = Number(birthday[1]);
      let month = Number(birthday[0]);
      let year = Number(birthday[2]);
      return new Date(year + idade, month - 1, day) <= new Date();
    }
  }
}

