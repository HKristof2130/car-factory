import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWarehouseComponent } from './car-warehouse.component';

describe('CarWarehouseComponent', () => {
  let component: CarWarehouseComponent;
  let fixture: ComponentFixture<CarWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
