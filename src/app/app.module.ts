import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarWarehouseComponent } from './car-warehouse/car-warehouse.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CarConfiguratorComponent } from './car-configurator/car-configurator.component';
import { CarPartComponent } from './car-part/car-part.component';

@NgModule({
  declarations: [
    AppComponent,
    CarWarehouseComponent,
    BrandListComponent,
    CarConfiguratorComponent,
    CarPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
