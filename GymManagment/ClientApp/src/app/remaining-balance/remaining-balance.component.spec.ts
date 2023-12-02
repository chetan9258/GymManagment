import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingBalanceComponent } from './remaining-balance.component';

describe('RemainingBalanceComponent', () => {
  let component: RemainingBalanceComponent;
  let fixture: ComponentFixture<RemainingBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
