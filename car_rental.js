// Customer Object
var Customer = function (customerInfo) {
  this.id = customerInfo.id,
  this.name = customerInfo.name,
  this.carRented = null;
};

// Car Object
var Car = function (carInfo) {
  this.id = carInfo.id,
  this.producer = carInfo.producer,
  this.model = carInfo.model,
  this.rentalPricePerDay = carInfo.rentalPricePerDay,
  this.available = true,
  this.customer = null,
  this.rentalDuration = null,

  this.quotePrice = function(rentalDuration){
    // Do I need a 'this.' in rentalDuration if an input?
    return this.rentalPricePerDay * rentalDuration;
  };

  this.reserve = function(customer,rentalDuration){
    if (this.available === true){
      this.available = false;
      this.customer = customer;
      this.rentalDuration = rentalDuration;
      return true;
    }
    else{
      return false;
    }
  };

  this.return = function(){
    if (this.available === true){
      console.log("Sorry bro, this car has already been returned.");
    }
    else {
      this.available = true;
      this.customer = null;
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

  // My code below
  this.addCar = function(carObj){
    if (this.getCar(carObj.id)){
      console.log("ID already exists bro");
    }
    else{
      this.cars.push(carObj);
      console.log("Car added to warehouse bro");
    }
  };

  this.addCustomer = function(customerObj){
    if (this.getCustomer(customerObj.id)) {
      console.log("ID already exists bro");
    }
    else {
      this.customers.push(customerObj);
      console.log("Customer added to warehouse bro");
    };
  };

  this.removeCar = function(carID){
    var indexnum = findCarIndex(carID);
    if (indexnum > -1){
      // change to splice
      delete this.cars[indexnum];
      console.log("Car has been deleted bro");
    }
    else {
      console.log("Car not found bro");
    }
  };

  this.removeCustomer = function(customerID){
    var indexnum = findCustomerIndex(customerID);
    if (indexnum > -1){
      // change to splice
      delete this.customers[indexnum];
      console.log("Customer has been deleted bro");
    }
    else {
      console.log("Customer not found bro");
    }
  };

  this.availableCars = function(){
    return this.cars.filter(function(car) {
      // Will this return the full object into the array of just he available property?
      return car.available;
    });
  };

  this.rentCar = function(customerID,rentalDuration){
    // insert code
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

var carInfo2 = {
  id: "002",
  producer: "Honda",
  model: "Civic",
  rentalPrice: 150,
};

var carA = new Car(carInfo);
var carB = new Car(carInfo2);

var vendor = new Vendor('JensLimited');
vendor.addCustomer(customerA);


vendor.addCar(carA);
vendor.addCar(carB);

vendor.availableCars();

// vendor.rentCar(customerA.id, 5);
