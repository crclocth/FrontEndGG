import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubSectorComponent } from './sub-sector/sub-sector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubsetCardComponent } from './subset-card/subset-card.component';



@NgModule({
  declarations: [NavBarComponent, SubSectorComponent, SubsetCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NavBarComponent, SubSectorComponent,SubsetCardComponent]
})
export class SharedModule { }
