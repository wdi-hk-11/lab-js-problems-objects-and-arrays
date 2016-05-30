// Customer Object
var Customer = function (customerInfo) {
  // ** your code here**
};

// Car Object
var Car = function (carInfo) {
  // ** your code here**
};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    this.cars.findIndex(function(car){
      if (car.id === carID){
        return true;
      } else {
        return false;
      }
    });
  };

  this.findCustomerIndex = function (customerID) {
    this.customers.findIndex(function(customer){
      if (customer.id === customerID){
        return true;
      } else {
        return false;
      }
    });
  };

  this.getCar = function (carID) {
    this.cars.find(function(car){
      if (car.id === carID){
        return true;
      } else {
        return false;
      }
    });
  };

  this.getCustomer = function (customerID) {
    this.customers.find(function(customer){
      if (customer.id === customerID){
        return true;
      } else {
        return false;
      }
    });
  };

  // **your code here**
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
vendor.addCustormer(customerA);

vendor.avalibleCars();
vendor.addCar(carA);
vendor.avalibleCars();

vendor.rentCar(customerA.id, 5);