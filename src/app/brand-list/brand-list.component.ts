import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarGeneratorService } from '../car-generator/car-generatoor';
import { CarType } from '../car-type.enum';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  @Input() carBrands: CarType[] = [];
  @Output() addCarBrandToSearch: EventEmitter<CarType> = new EventEmitter<CarType>();
  @Output() removeCarBrandFromSearch: EventEmitter<CarType> = new EventEmitter<CarType>();
  carsOnSearch: Set<CarType> = new Set<CarType>();
  constructor() { }

  ngOnInit(): void {
  }

  addCarBrandToSearchSet(brand: CarType) {

    if (this.carsOnSearch.has(brand)) {
      return;
    }

    this.carsOnSearch.add(brand);
    this.addCarBrandToSearch.emit(brand)

    console.log("Added to set" + this.carsOnSearch.size);

  }

  removeCarBrandFromSearchSet(brand: CarType) {
    
    if (!this.carsOnSearch.has(brand)) {
      return;
    }

    this.carsOnSearch.delete(brand);
    this.removeCarBrandFromSearch.emit(brand);
    console.log("Removed from set" + this.carsOnSearch.size);

  }
}
