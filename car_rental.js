// Customer
var Customer = function(customerInfo){
  this.id = customerInfo.id;
  this.name = customerInfo.name;
  this.carRented = null;
};

// Car
var Car = function (carInfo) {
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPricePerDay = carInfo.rentalPrice;
  this.available = true;
  this.customer = null;
  this.rentalDuration = 0;

/* Call rentalDuration then return rentalPrice * rentalDuration */
  this.quotePrice = function(rentalDuration){
    return rentalDuration * this.rentalPricePerDay;
  };

/*Takes customer object and rentalDuration value */
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
    if (this.availible) {
      return "Sorry, this car have already been returned.";
    } else {
      this.availible = true;
      this.customer = null;
      this.rentalDuration = null;
      return "Thank you!";
    }
  };
};

// Vendor
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

/* Takes carID and returns the index of -1 */
  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

/* Takes customerID and returns the index of -1 */
  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

/* takes a carID and returns the actual car object or undefined  */
  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

/* takes a customerID and returns the actual car/customer object or undefined. */
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

/* Get carID and return the value */
  this.addCustomer = function (customerObj) {
    var customer = this.getCustomer(customerObj.id);
    if (customer) {
      console.log("ID already exists");
    } else {
      this.customers.push(customerObj);
      console.log("Customer added to records");
    }
  };

  this.removeCar = function (carID) {
    var carIndex = this.findCarIndex(carID);
    if (carIndex >= 0) {
      this.cars.splice(carIndex, 1);
      console.log("Car deleted");
    } else {
      console.log( "The carID could not be found.");
    }
  };

  this.removeCustomer = function (customerID) {
    var customerIndex = this.findCustomerIndex(customerID);
    if (customerIndex >= 0) {
      this.customers.splice(customerIndex, 1);
      console.log("Customer deleted");
    } else {
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

/* takes no arguments. Use the array.reduce to sum up the revenues for each car.*/
  this.totalRevenue = function () {
    return this.cars.reduce(function(prevSum, currCar){
      console.log(prevSum, currCar);
      return prevSum + (currCar.rentalDuration * currCar.rentalPricePerDay);
    }, 0);
  };
};


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
vendor.addCar(carA);

console.log(vendor.availableCars());
vendor.rentCar(customerA.id, 5);
console.log(vendor.availableCars());
console.log(vendor.totalRevenue());

vendor.removeCustomer("001");
console.log(vendor.customers);

vendor.removeCar("001");
console.log(vendor.cars);