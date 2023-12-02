import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemainingBalanceComponent } from './add-remaining-balance.component';

describe('AddRemainingBalanceComponent', () => {
  let component: AddRemainingBalanceComponent;
  let fixture: ComponentFixture<AddRemainingBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemainingBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemainingBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
