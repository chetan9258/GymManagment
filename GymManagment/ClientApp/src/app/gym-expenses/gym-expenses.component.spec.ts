import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymExpensesComponent } from './gym-expenses.component';

describe('GymExpensesComponent', () => {
  let component: GymExpensesComponent;
  let fixture: ComponentFixture<GymExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
