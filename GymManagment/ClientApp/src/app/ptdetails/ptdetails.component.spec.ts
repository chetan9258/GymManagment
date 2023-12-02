import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTDetailsComponent } from './ptdetails.component';

describe('PTDetailsComponent', () => {
  let component: PTDetailsComponent;
  let fixture: ComponentFixture<PTDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
