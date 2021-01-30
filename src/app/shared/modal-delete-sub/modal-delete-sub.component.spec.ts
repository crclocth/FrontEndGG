import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteSubComponent } from './modal-delete-sub.component';

describe('ModalDeleteSubComponent', () => {
  let component: ModalDeleteSubComponent;
  let fixture: ComponentFixture<ModalDeleteSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
