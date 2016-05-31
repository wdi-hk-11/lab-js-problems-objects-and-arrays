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
  this.rentalPricePerDay = carInfo.rentalPrice;
  this.available = true;
  this.Customer = null;
  this.rentalDuration = 0;

  this.quotePrice = function(rentalDuration) {
    return this.rentalPrice * rentalDuration;
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
      console.log("Car ID already exists");
    } else {
      this.cars.push(carObj);
      console.log("Car added to warehouse");
    }
  };

  this.addCustomer = function (customerObj) {
    var customer = this.getCustomer(customerObj.id);
    if (customer) {
      console.log("Customer ID already exists");
    } else {
      this.customers.push(customerObj);
      console.log("Customer added to warehouse");
    }
  };

  this.removeCar = function (carID) {
    var carIndex = this.findCarIndex(carID);
    if (carIndex >=0) {
      this.cars.splice(carIndex,1);
      console.log("Car deleted");
    } else {
      console.log("Car not found");
    }
  };

  this.removeCustomer = function (customerID) {
    var customerIndex = this.findCustomerIndex(customerID);
    if (customerIndex >=0) {
      this.customers.splice(customerIndex,1);
      console.log("Customer deleted");
    } else {
      console.log("Customer not found");
    }
  };

  this.availableCars = function () {
    return this.cars.filter(function(car) {return car.available ? true : false;});
  };

  this.rentCar = function (customerID, rentalDuration) {
    var availableCars = this.availableCars();
    if (availableCars.length === 0) {
      console.log("All our cars have been rented");
    } else {
      var customer = this.getCustomer(customerID);
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
    var customer = this.getCustomer(customerID);
    if (customer) {
      customer.carRented.return();
      customer.carRented = null;
      console.log( "Thank you for using our service");
    } else {
      console.log("Please provide a valid customerID");
    }
  };

  //not done
  this.totalRevenue = function () {
    return this.cars.reduce(function(prev, curr) {
      return prev + (curr.rentalPricePerDay * curr.rentalDuration);
      },0
    );
  };
};


// Codes you can run to test your code
var customerInfoA = {
  id: "001",
  name: "Sherman"
};

var customerInfoB = {
  id: "002",
  name: "Sherwoman"
};

var customerInfoC = {
  id: "003",
  name: "Shernoman"
};

var customerA = new Customer(customerInfoA);
var customerB = new Customer(customerInfoB);
var customerC = new Customer(customerInfoC);

var carInfoA = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200
};

var carInfoB = {
  id: "002",
  producer: "Volkswagen",
  model: "Jetta",
  rentalPrice: 300
};

var carInfoC = {
  id: "003",
  producer: "Toyota",
  model: "Civic",
  rentalPrice: 250
};

var carA = new Car(carInfoA);
var carB = new Car(carInfoB);
var carC = new Car(carInfoC);


var vendor = new Vendor('Jens Limited');
vendor.addCustomer(customerA);
vendor.addCustomer(customerB);
vendor.addCustomer(customerC);
console.log(vendor.customers);
vendor.removeCustomer(customerC.id);
console.log(vendor.customers);


vendor.addCar(carA);
vendor.addCar(carB);
console.log(vendor.availableCars());
vendor.addCar(carC);
console.log(vendor.availableCars());
vendor.removeCar(carC.id);
console.log(vendor.availableCars());


vendor.rentCar(customerA.id, 5);
vendor.returnCar(customerA.id);

console.log(vendor.totalRevenue());
