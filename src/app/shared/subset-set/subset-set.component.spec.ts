import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetSetComponent } from './subset-set.component';

describe('SubsetSetComponent', () => {
  let component: SubsetSetComponent;
  let fixture: ComponentFixture<SubsetSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
