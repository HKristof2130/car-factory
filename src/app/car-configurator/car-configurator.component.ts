import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrls: ['./car-configurator.component.scss']
})
export class CarConfiguratorComponent implements OnInit {

  configurableParts : CarPart[] = [CarPart.DOORS,CarPart.WINDOWS,CarPart.ENGINE,CarPart.TIRE];
  givenPart : string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  selectCarPart(index : number){
    this.givenPart = this.configurableParts[index];
    console.log(`I selected ${this.givenPart}`);
    
  }

  getAmountFromSelectedPart($event : number){
    // index signature for carpart and amount
  }

}

export type CarPartAmount = {
  carPart: CarPart,
  amount : number,
}

export enum CarPart{
  DOORS = "Doors",
  WINDOWS = "Windows",
  ENGINE = "Engine",
  TIRE = "Tire",
}
