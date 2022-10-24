import { CarType } from "../car-type.enum";

export class Car{
    private static readonly MIN_CAR_DOORS = 2;
    private static readonly MAX_CAR_DOORS = 5;
    private static readonly MIN_CAR_WINDOWS = 4;
    private static readonly MAX_CAR_WINDOWS = 6;
    private static readonly MIN_CAR_ENGINE = 1;
    private static readonly MAX_CAR_ENGINE = 3;
    private static readonly MIN_CAR_TIRES = 4;
    private static readonly MAX_CAR_TIRES = 8;

    carType : CarType;
    doors : number ;
    windows : number ;
    engine : number ;
    tire : number ;

    private constructor(type : CarType , doorNumber : number, windowNumber : number, engineNumber : number, tireNumber : number){
        this.carType = type;
        this.doors = doorNumber;
        this.windows = windowNumber;
        this.engine = engineNumber;
        this.tire = tireNumber;
    }


    static buildCar(type: CarType) : Car{
        
        const doors = Math.floor( Math.random() * (Car.MAX_CAR_DOORS - Car.MIN_CAR_DOORS +1)) + Car.MIN_CAR_DOORS;
        
        const windows = Math.floor(Math.random() * (Car.MAX_CAR_WINDOWS - Car.MIN_CAR_WINDOWS +1)) + Car.MIN_CAR_WINDOWS;

        const engine = Math.random() * (Car.MAX_CAR_ENGINE - Car.MIN_CAR_ENGINE +1) + Car.MIN_CAR_ENGINE;

        const tires = Math.floor(Math.random() * (Car.MAX_CAR_TIRES - Car.MIN_CAR_TIRES +1)) + Car.MIN_CAR_TIRES;
        
        return new Car(type, doors, windows, engine, tires);
    }
}