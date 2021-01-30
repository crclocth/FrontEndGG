import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerCardComponent } from './sticker-card.component';

describe('StickerCardComponent', () => {
  let component: StickerCardComponent;
  let fixture: ComponentFixture<StickerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
