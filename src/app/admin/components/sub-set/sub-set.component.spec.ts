import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSetComponent } from './sub-set.component';

describe('SubSetComponent', () => {
  let component: SubSetComponent;
  let fixture: ComponentFixture<SubSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
