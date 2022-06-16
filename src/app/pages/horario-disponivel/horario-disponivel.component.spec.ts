import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioDisponivelComponent } from './horario-disponivel.component';

describe('HorarioDisponivelComponent', () => {
  let component: HorarioDisponivelComponent;
  let fixture: ComponentFixture<HorarioDisponivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioDisponivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioDisponivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
