function Car( options ) {

  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";

}

function Truck( options){

  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function ( options ) {

  if( options.vehicleType === "car" ){
    this.vehicleClass = Car;
  }else{
    this.vehicleClass = Truck;
  }

  return new this.vehicleClass( options );

};

const movingTruck = carFactory.createVehicle( { 
  vehicleType: "truck", 
  state: "like new", 
  color: "red", 
  wheelSize: "small" } );


// Очікуємо true
console.log( movingTruck instanceof Truck );



const carFactory = new VehicleFactory();
const car = carFactory.createVehicle( { 
            vehicleType: "car", 
            color: "yellow", 
            doors: 6 } );



// Очікуємо true
console.log( car instanceof Car ); 