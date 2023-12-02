import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembershipPlanComponent } from './add-membership-plan.component';

describe('AddMembershipPlanComponent', () => {
  let component: AddMembershipPlanComponent;
  let fixture: ComponentFixture<AddMembershipPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMembershipPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMembershipPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
