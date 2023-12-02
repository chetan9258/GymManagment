import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymBranchesComponent } from './add-gym-branches.component';

describe('AddGymBranchesComponent', () => {
  let component: AddGymBranchesComponent;
  let fixture: ComponentFixture<AddGymBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGymBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGymBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
