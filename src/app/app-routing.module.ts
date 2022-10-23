import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CarConfiguratorComponent } from './car-configurator/car-configurator.component';
import { CarWarehouseComponent } from './car-warehouse/car-warehouse.component';

const routes: Routes = [
  {path : "car-warehouse", component : CarWarehouseComponent},
  {path : "car-configurator", component : CarConfiguratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
