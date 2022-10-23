import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car-part',
  templateUrl: './car-part.component.html',
  styleUrls: ['./car-part.component.scss']
})
export class CarPartComponent implements OnInit {

  @Input() carPart : string = "";
  @Output() amountForCarConfigurator : EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  addSelectedAmount(amount : string){
    const amountInNumber = Number(amount);
    console.log(amountInNumber);
    this.amountForCarConfigurator.emit(amountInNumber);
    
    
  }

}
