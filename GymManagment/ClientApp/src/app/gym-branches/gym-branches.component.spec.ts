import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymBranchesComponent } from './gym-branches.component';

describe('GymBranchesComponent', () => {
  let component: GymBranchesComponent;
  let fixture: ComponentFixture<GymBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
