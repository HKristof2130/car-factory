import { Component, OnInit } from '@angular/core';
import { Car } from '../car-generator/car-generatoor';
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
  constructor() { }

  ngOnInit(): void {

    for(let i = 0 ; i < CarWarehouseComponent.GENERATE_CARS_FROM_EACH_TYPE; i++ ){
      this.carsOnStock.push(Car.buildCar(CarType.AUDI));
      this.carsOnStock.push(Car.buildCar(CarType.BMW));
      this.carsOnStock.push(Car.buildCar(CarType.TRABANT));
    }

    console.log(this.carsOnStock);
    
  }

  addCarToSearch($event : CarType){
    this.carBrandsOnSearch.add($event);
  }

  removeCarFromSearch($event : CarType){
    this.carBrandsOnSearch.delete($event);
  }

}
