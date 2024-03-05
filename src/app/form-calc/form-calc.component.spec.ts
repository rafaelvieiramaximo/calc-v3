import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalcComponent } from './form-calc.component';

describe('FormCalcComponent', () => {
  let component: FormCalcComponent;
  let fixture: ComponentFixture<FormCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
