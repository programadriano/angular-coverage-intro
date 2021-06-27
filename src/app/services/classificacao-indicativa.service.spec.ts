import { TestBed } from '@angular/core/testing';

import { ClassificacaoIndicativaService } from './classificacao-indicativa.service';

describe("Classificacao indicativa livre", function () {
  let service: ClassificacaoIndicativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificacaoIndicativaService);
  });


  it("Permitir todas idades", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(true, "", 0)).toBeTrue();
  });

});


describe("Classificacao indicativa 10 anos", function () {
  let service: ClassificacaoIndicativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificacaoIndicativaService);
  });

  it("Permitir somente maior de 10 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "05/04/1985", 10)).toBeTrue();
  });

  it("Não permitir menor de 10 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "28/12/2019", 10)).toBeFalse();
  });

});


describe("Classificacao indicativa 12 anos", function () {
  let service: ClassificacaoIndicativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificacaoIndicativaService);
  });

  it("Permitir somente maior de 12 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "05/04/1985", 12)).toBeTrue();
  });

  it("Não permitir menor de 12 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "28/12/2019", 12)).toBeFalse();
  });

});

describe("Classificacao indicativa 14 anos", function () {
  let service: ClassificacaoIndicativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificacaoIndicativaService);
  });

  it("Permitir somente maior de 14 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "05/04/1985", 12)).toBeTrue();
  });

  it("Não permitir menor de 14 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "28/12/2019", 12)).toBeFalse();
  });

});

describe("Classificacao indicativa 16 anos", function () {
  let service: ClassificacaoIndicativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificacaoIndicativaService);
  });

  it("Permitir somente maior de 16 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "05/04/1985", 12)).toBeTrue();
  });

  it("Não permitir menor de 16 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "28/12/2019", 12)).toBeFalse();
  });

});

describe("Classificacao indicativa 18 anos", function () {
  let service: ClassificacaoIndicativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificacaoIndicativaService);
  });

  it("Permitir somente maior de 18 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "05/04/1985", 12)).toBeTrue();
  });

  it("Não permitir menor de 18 anos", () => {
    expect(service.verificaClassificacaoIndicativaPorIdade(false, "28/12/2019", 12)).toBeFalse();
  });

});