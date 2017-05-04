import { TestBed, inject } from '@angular/core/testing';

import { HistoricoService } from './historico.service';

describe('HistoricoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoricoService]
    });
  });

  it('should ...', inject([HistoricoService], (service: HistoricoService) => {
    expect(service).toBeTruthy();
  }));
});
