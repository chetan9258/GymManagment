import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalPaymentsComponent } from './renewal-payments.component';

describe('RenewalPaymentsComponent', () => {
  let component: RenewalPaymentsComponent;
  let fixture: ComponentFixture<RenewalPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewalPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewalPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
