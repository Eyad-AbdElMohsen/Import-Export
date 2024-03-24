export class Vehicle {
    constructor(color , number_of_wheels , horn){
        this.color = color || "blue";
        this.number_of_wheels = number_of_wheels || 4;
        this.horn = horn || "beep beep";
    }
    honkHorn = function() {
        return this.horn;
    }
}


