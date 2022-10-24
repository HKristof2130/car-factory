import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { CarType } from "../car-type.enum";
import { Car } from "./car.type";

@Injectable({
    providedIn : "root",
})
export class CarGeneratorService{

    private static readonly AMOUNT_FROM_EACH_CARTYPE = 30;
    cars : Car[] = [];

    constructor(){
        
        for(let i = 0; i < CarGeneratorService.AMOUNT_FROM_EACH_CARTYPE; i++){
            this.cars.push(Car.buildCar(CarType.AUDI));
            this.cars.push(Car.buildCar(CarType.TRABANT));
            this.cars.push(Car.buildCar(CarType.BMW));
        }
    }

    getCarsArray() :  Car[]{
        return this.cars;
    }

    

}