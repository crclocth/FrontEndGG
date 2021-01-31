import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeNodesComponent } from './free-nodes.component';

describe('FreeNodesComponent', () => {
  let component: FreeNodesComponent;
  let fixture: ComponentFixture<FreeNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeNodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
