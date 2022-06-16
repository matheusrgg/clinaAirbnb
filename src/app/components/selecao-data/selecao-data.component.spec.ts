import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoDataComponent } from './selecao-data.component';

describe('SelecaoDataComponent', () => {
  let component: SelecaoDataComponent;
  let fixture: ComponentFixture<SelecaoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
