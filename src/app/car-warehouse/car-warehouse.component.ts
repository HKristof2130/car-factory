import { Component, OnInit } from '@angular/core';
import { CarPartsAndAmountsDictionary } from '../car-configurator/car-configurator.component';
import { CarGeneratorService } from '../car-generator/car-generatoor';
import { Car } from '../car-generator/car.type';
import { CarType } from '../car-type.enum';

@Component({
  selector: 'app-car-warehouse',
  templateUrl: './car-warehouse.component.html',
  styleUrls: ['./car-warehouse.component.scss']
})
export class CarWarehouseComponent implements OnInit {

  private static readonly GENERATE_CARS_FROM_EACH_TYPE = 10;
  carsOnStock : Car[] = [];
  carTypes : CarType[] = [CarType.AUDI,CarType.BMW,CarType.TRABANT];
  carBrandsOnSearch : Set<CarType> = new Set<CarType>();
  constructor(private carGeneratorService : CarGeneratorService) { }

  ngOnInit(): void {

    this.carsOnStock = this.carGeneratorService.getCarsArray();
    console.log(this.carsOnStock);
    
  }

  addCarToSearch($event : CarType){
    this.carBrandsOnSearch.add($event);
  }

  removeCarFromSearch($event : CarType){
    this.carBrandsOnSearch.delete($event);
  }

  getPartsAndAmountsFromCarConfigurator($event : CarPartsAndAmountsDictionary){
    console.log($event);
    
  }


}
