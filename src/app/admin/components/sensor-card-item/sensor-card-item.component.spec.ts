import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorCardItemComponent } from './sensor-card-item.component';

describe('SensorCardItemComponent', () => {
  let component: SensorCardItemComponent;
  let fixture: ComponentFixture<SensorCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
