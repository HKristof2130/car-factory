import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrls: ['./car-configurator.component.scss']
})
export class CarConfiguratorComponent implements OnInit {

  configurableParts : CarPart[] = [CarPart.DOORS,CarPart.WINDOWS,CarPart.ENGINE,CarPart.TIRE];
  givenPart : string = "";
  selectedCarPartsAndAmounts : CarPartsAndAmountsDictionary = {};
  @Output() giveSelectedPartsAndAmounts : EventEmitter<CarPartsAndAmountsDictionary> = new EventEmitter<CarPartsAndAmountsDictionary>();
  
  constructor() { }

  ngOnInit(): void {
  }

  selectCarPart(index : number){
    this.givenPart = this.configurableParts[index];
    console.log(`I selected ${this.givenPart}`);
    
  }

  getAmountFromSelectedPart($event : number){
    this.selectedCarPartsAndAmounts[this.givenPart] = { carPart : this.givenPart , amount : $event};

    this.giveSelectedPartsAndAmounts.emit(this.selectedCarPartsAndAmounts);
  }

}

export type CarPartsAndAmountsDictionary = {
  [key:string] : CarPartAmount;
}

export type CarPartAmount = {
  carPart: string,
  amount : number,
}

export enum CarPart{
  DOORS = "Doors",
  WINDOWS = "Windows",
  ENGINE = "Engine",
  TIRE = "Tire",
}
