import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubSectorComponent } from './sub-sector/sub-sector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubsetCardComponent } from './subset-card/subset-card.component';
import { SubsetSetComponent } from './subset-set/subset-set.component';



@NgModule({
  declarations: [NavBarComponent, SubSectorComponent, SubsetCardComponent, SubsetSetComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  exports: [NavBarComponent, SubSectorComponent,SubsetCardComponent, SubsetSetComponent]
})
export class SharedModule { }
