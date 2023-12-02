import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersHistoryComponent } from './trainers-history.component';

describe('TrainersHistoryComponent', () => {
  let component: TrainersHistoryComponent;
  let fixture: ComponentFixture<TrainersHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
