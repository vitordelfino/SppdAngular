import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitoricoViagemComponent } from './hitorico-viagem.component';

describe('HitoricoViagemComponent', () => {
  let component: HitoricoViagemComponent;
  let fixture: ComponentFixture<HitoricoViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitoricoViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitoricoViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
