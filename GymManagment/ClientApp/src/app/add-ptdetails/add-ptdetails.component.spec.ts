import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPTDetailsComponent } from './add-ptdetails.component';

describe('AddPTDetailsComponent', () => {
  let component: AddPTDetailsComponent;
  let fixture: ComponentFixture<AddPTDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPTDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPTDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
