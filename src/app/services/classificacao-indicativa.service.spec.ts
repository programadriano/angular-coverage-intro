import { TestBed } from '@angular/core/testing';

import { ClassificacaoIndicativaService } from './classificacao-indicativa.service';

describe('ClassificacaoIndicativaService', () => {
  let service: ClassificacaoIndicativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificacaoIndicativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
