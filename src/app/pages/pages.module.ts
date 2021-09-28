import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ProductListModule } from './product-list/product-list.module';
import { PriceScreenModule } from './price-screen/price-screen.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ProductListModule,
    PriceScreenModule
  ]
})
export class PagesModule { }
