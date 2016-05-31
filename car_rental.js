// Customer Object
var Customer = function (customerInfo) {
  this.id         = customerInfo.ID;
  this.name       = customerInfo.name;
  this.carRental  = {};
};


// Car Object
var Car = function (carInfo) {
  this.id           = carInfo.id;
  this.producer     = carInfo.producer;
  this.model        = carInfo.model;
  this.rentalPrice  = carInfo.rentalPrice;
  this.available    = true;
  this.customer     = null;
  this.rentalDur    = 0;

  this.quotePrice   = function (rentalDur) {
    return this.rentalPrice*this.rentalDur;
  };

  this.reserve      = function (customer, rentalDur) {
    customer  = this.customer;
    rentalDur = this.rentalDur;
    if ( customer === false && this.available === true) {
      this.available  = false;
      this.customer   = Customer.name;
      this.rentalDur  = rentalDur;
      this.reserve    = true;
    } else {
      this.reserve = false;
    }
  };
  this.return = function () {
    if (this.available === true) {
      console.log('Sorry, this car have already been returned.');
    } else {
      this.available = true;
      this.customer  = null;
      this.rentalDur = 0;
    }
  };
};


// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

// find the carID and return the index
  this.findCarIndex = function (carID) {
    this.cars.findIndex(function(car){
      return Car.id === carID ? true : false ;
    });
  };

// find the customerID and return the index
  this.findCustomerIndex = function (customerID) {
    this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

// Find the carID and return the value
  this.getCar = function (carID) {
    this.cars.find(function(car){
      return Car.id === carID ? true : false ;
    });
  };

// Find the carID and return the value
  this.getCustomer = function (customerID) {
    this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

// Check and add the car into vendor.cars
  this.addCar = function (carObj) {
    if ( this.getCar(carObj.id) == -1) {
      console.log('ID already exists');
    } else {
      this.cars.push(carObj);
      console.log('Car added to warehouse');
    }
  };

// Check and add the customer into vendor.customers
  this.addCustomer = function (customerObj) {
    if ( this.getCustomer(customerObj.id) == -1) {
      console.log('ID already exists');
    } else {
      this.customers.push(customerObj);
      console.log('Customer added to warehouse');
    }
  };

// Check if the car is in vendor.cars array. if yes, remove the car; if not, show not found
  this.removeCar = function (carID) {
    var index = this.cars.indexOf(carID);
    if ( this.findCarIndex[carID] === true) {
      if (index > -1) {
        this.cars.splice(index, 1);
      }
      console.log('Car has been removed');
    } else {
      console.log('Car not found');
    }
  };

// similar to removeCar
  this.removeCustomer = function (customerID) {
    if ( this.findCustomerIndex(customerID) === true) {
      delete this.customers[customerID];
      console.log('Customer added to warehouse');
    } else {
      console.log('ID already exists');
    }
  };

// Return a list of cars where car.available & this.getCar are true <== here's sth wrong leads to undefined car list
  this.availableCars = function () {
    if (Car.available === true && this.getCar === true ) {
      return this.cars.filter(Car.available);
    }
  };

// If availableCars.length = 0, show all cars were rented; otherwise check if customerID is there. if yes, console.log providing a valid CusID or reserve with customerID & rentalDur)
  this.rentCar = function (customerID, rentalDur) {
    if (this.availableCars.length === 0) {
      console.log('All our cars have been rented');
    } else  {
      if ( this.getCustomer(customerID) === underfined ) {
        console.log("Please provide a valid customerID");
      } else {
        Car.reserve (customerID, rentalDur);
        console.log ('The car has been reserved');
      }
    }
  };

// To return car
  this.returnCar = function (customerID) {
    if ( this.getCustomer(customerID) === underfined ) {
      console.log ('Please provide a valid customerID');
    } else {
      Car.return();
      console.log('Thank you for using our service');
    }
  };

// Revenue
  this.totalRevenue = function () {
    return this.cars.reduce (function (a, b) {
      return Car.rentalDur * Car.rentalPrice;
    });
  };
};



// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};
var customerA = new Customer(customerInfo);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustomer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);