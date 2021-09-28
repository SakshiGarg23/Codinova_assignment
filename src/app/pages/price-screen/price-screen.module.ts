import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceScreenComponent } from './price-screen.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PriceScreenComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
  ],
  exports: [PriceScreenComponent]
})
export class PriceScreenModule { }
