import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';
import { RatePercentagePipe } from './rate-percentage.pipe';
import { PriceCurrancyPipe } from './price-currancy.pipe';
import { ParentComponent } from './parent/parent.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    NavbarComponent,
    SlideComponent,
    RatePercentagePipe,
    PriceCurrancyPipe,
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
