import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCartaoComponent } from './historico-cartao.component';

describe('HistoricoCartaoComponent', () => {
  let component: HistoricoCartaoComponent;
  let fixture: ComponentFixture<HistoricoCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
