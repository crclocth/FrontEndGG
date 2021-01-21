import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetCardComponent } from './subset-card.component';

describe('SubsetCardComponent', () => {
  let component: SubsetCardComponent;
  let fixture: ComponentFixture<SubsetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
