import * as all from './Vehicle.js';
export class Bicycle extends all.Vehicle {
    constructor(color , number_of_wheels , horn){
        super(color);
        this.number_of_wheels = number_of_wheels || 2;
        this.horn = horn || "honk honk";
    }
}
        