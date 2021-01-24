import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubSectorComponent } from './sub-sector/sub-sector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubsetCardComponent } from './subset-card/subset-card.component';
import { StickerCardComponent } from './sticker-card/sticker-card.component';
import { StickerButtonComponent } from './sticker-button/sticker-button.component';

const components = [
  NavBarComponent, SubSectorComponent, SubsetCardComponent, StickerCardComponent,StickerButtonComponent,
]


@NgModule({

  declarations: [... components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  exports: [...components]

})
export class SharedModule { }
