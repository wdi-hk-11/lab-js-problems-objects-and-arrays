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
    for (var i=0; i<this.cars.length; i++) {
      if (this.cars[i].id === carID) {
        return i;
      }
    }
    return -1;
  };

  this.findCustomerIndex = function (customerID) {
    for (var i=0; i<this.customers.length; i++) {
      if (this.customers[i].id === customerID) {
        return i;
      }
    }
    return -1;
  };

  this.getCar = function (carID) {
    var index = this.findCarIndex(carID);
    if (index >= 0){
      return this.cars[index];
    } else {
      return null;
    }
  };

  this.getCustomer = function (customerID) {
    var index = this.findCustomerIndex(customerID);
    if (index >= 0){
      return this.customers[index];
    } else {
      return null;
    }
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