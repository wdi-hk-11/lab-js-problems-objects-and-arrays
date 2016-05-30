// Customer Object
var Customer = function (customerInfo) {
  this.id = customerInfo.id;
  this.name = customerInfo.name;
  this.CarRented = null;
};

// Car Object
var Car = function (carInfo) {
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPricePerDay = carInfo.rentalPricePerDay;
  this.available = true;
  this.Customer = null;
  this.rentalDuration = 0;

  this.quotePrice = function(rentalDuration) {
    return this.rentalPricePerDay * rentalDuration;
  };

  this.reserve = function(Customer, rentalDuration) {
    if (this.available) {
      this.available = false;
      this.customer = Customer;
      this.rentalDuration = rentalDuration;
      return true;
    } else {
      return false;
    }
  };

  this.return = function() {
    if (this.available) {
      console.log ("Sorry, this car have already been returned.");
    } else {
      this.available = true;
      this.Customer = null;
      this.rentalDuration = null;
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

  this.addCustomer = function (customerObj) {
    var customer = this.getCustomer(customerObj.id);
    if (customer) {
      console.log("ID already exists");
    } else {
      this.customers.push(customerObj);
      console.log("Customer added to warehouse");
    }
  };

  this.removeCar = function (carID) {
    var carIndex = this.findCarIndex(carID.id);
    if (carIndex >=0) {
      this.cars.splice(this.findCarIndex,1);
      console.log("Car deleted");
    } else {
      console.log("Car not found");
    }
  };

  this.removeCustomer = function (customerID) {
    var customerIndex = this.findCustomerIndex(customerID.id);
    if (customerIndex >=0) {
      this.customers.splice(this.findCustomerIndex,1);
      console.log("Customer deleted");
    } else {
      console.log("Customer not found");
    }
  };

  this.availableCars = function () {
    return this.cars.filter(function(car) {return car.available == true;});
  };

  this.rentCar = function (customerID, rentalDuration) {
    If (this.availableCars.length === 0) {
      console.log("All our cars have been rented");
    } else {
      var customer = this.getCustomer(customerID);
      if (customer) {

        console.log("The car has been reserved");
      } else {
        console.log("Please provide a valid customerID");
      }
    }
  };

  this.returnCar = function (customerID) {
    var customer = this.getCustomer[customerID];
    if (customer) {
      customer.carRented.return();
      customer.CarRented = null;
      console.log( "Thank you for using our service");
    } else {
      console.log("Please provide a valid customerID");
    }
  };

  this.totalRevenue = function () {
    this.reduce(function(prev, curr) {
      return prev + curr;
      }
    )
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
  rentalPrice: 200
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustomer(customerA);

vendor.avalaibleCars();
vendor.addCar(carA);
vendor.avalaibleCars();

vendor.rentCar(customerA.id, 5);