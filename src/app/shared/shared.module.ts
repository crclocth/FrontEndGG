import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubSectorComponent } from './sub-sector/sub-sector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubsetCardComponent } from './subset-card/subset-card.component';
import { StickerCardComponent } from './sticker-card/sticker-card.component';
import { StickerButtonComponent } from './sticker-button/sticker-button.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { ModalDeleteSubComponent } from './modal-delete-sub/modal-delete-sub.component';
import { NodeProviderService } from '../core/providers/node/node-provider.service';

const components = [
  NavBarComponent, SubSectorComponent, SubsetCardComponent, StickerCardComponent,StickerButtonComponent,ModalDeleteComponent,ModalDeleteSubComponent
]


@NgModule({

  declarations: [... components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NodeProviderService],
  exports: [...components]

})
export class SharedModule { }
