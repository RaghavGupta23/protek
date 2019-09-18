function Company(location){
    this.location = location;
    this.companyInfo = function (){
        console.log(this.location)
    }
}

function Vehicle(warranty){
    this.warranty = warranty;
    this.vehicleInfo = function(){
        console.log(this.warranty);
    }
}

function Car(color){
    this.color = color;
    this.carInfo = function (){
        console.log(this.color);
    }
}

Vehicle.prototype = new Company("San_Jose");
Car.prototype = new Vehicle("26_years");

// var honda = new Company("San_Jose");
// var car = new Vehicle("26_years");
var civic = new Car("red");

console.log(civic.location);
// console.log(civic.());
// console.log(civic.());
