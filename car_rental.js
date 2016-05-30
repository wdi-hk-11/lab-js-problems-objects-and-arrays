// Customer Object
var Customer = function(customerInfo){
  this.id = customerInfo.id;
  this.name = customerInfo.name;
  this.carRented = null;
};

// Car Object
var Car = function (carInfo) {
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPrice = carInfo.rentalPrice;
  this.availible = true;
  this.customer = null;
  this.rentalDuration = 0;

  this.quotePrice = function(rentalDuration){
    return rentalDuration * this.price;
  };

  this.reserve = function (customer, rentalDuration) {
    if(this.availible) {
      this.availible = false;
      this.customer = customer;
      this.rentalDuration = rentalDuration;
      return true;
    }else{
      return false;
    }
  };

  this.return = function () {
    if (!this.availible) {
      this.availible = true;
      this.customer = null;
      this.rentalDuration = null;
      return "Thank you!";
    } else {
      return "Sorry, this car have already been returned.";
    }
  };
};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.addCar = function (carObj) {
    var car = this.getCar(carObj.id);
    if (car) {
      console.log("ID already exists");
    } else {
      this.cars.push(carObj);
      console.log("Car added to warehouse");
    }
  };

  this.addCustormer = function (customerObj) {
    var customer = this.getCustomer(customerObj.id);
    if (customer) {
      console.log("ID already exists");
    } else {
      this.cars.push(customerObj);
      console.log("Customer added to records");
    }
  };

  this.removeCar = function (carID) {
    var carIndex = this.findCarIndex(carID);
    if (carIndex >= 0) {
      delete this.cars[carIndex];
      console.log("Car deleted");
    } else {
      console.log( "The carID could not be found.");
    }
  };

  this.removeCustormer = function (customerID) {
    var customerIndex = this.findCustomerIndex(customerID);
    if (customerIndex >= 0) {
      console.log("Customer deleted");
    } else {
      delete this.customers[customerIndex];
      console.log( "The customerID could not be found.");
    }
  };

  this.availableCars = function () {
    return this.cars.filter(function(car){
      return car.availible ? true : false ;
    });
  };

  this.rentCar = function (customerID, rentalDuration) {
    var availableCars = this.availableCars();
    if (availableCars.length === 0) {
      console.log("All our cars have been rented");
    } else {
      var customer = getCustomer(customerID);
      if (customer) {
        var car = availableCars[0];
        customer.carRented = car;
        car.reserve(customer, rentalDuration);
        console.log("The car has been reserved");
      } else {
        console.log("Please provide a valid customerID");
      }
    }
  };

  this.returnCar = function (customerID) {
    var customer = getCustomer(customerID);
    if (customer) {
      customer.carRented.return();
      customer.carRented = null;
      console.log( "Thank you for using our service");
    } else {
      console.log("Please provide a valid customerID");
    }
  };

  this.totalRevenue = function () {
    this.cars.reduce(function(prevSum, currCar){
      return prevSum + (currCar.rentalDuration * currCar.rentalPricePerDay);
    }, 0);
  };
};


var customerInfo = {
  id: 1,
  name: "Sherman"
};
var customerA = new Customer(customerInfo);

var carInfo = {
  id: 1,
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};
var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustormer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
