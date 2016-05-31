// Customer Object Constructor
var Customer = function (customerInfo) {
  // ** your code here**
  this.id = customerInfo.id;
  this.name = customerInfo.name;
  this.carRented = null;
};

// Car Object
var Car = function (carInfo) {

  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPricePerDay = carInfo.rentalPrice;
  this.available = true;
  this.customer = null;
  this.rentalDuration = null;
  this.quotePrice = function(){
    return this.rentalPricePerDay*this.rentalDuration;
  };
  this.reserve = function(customer, rentalDuration){
    if (this.available){
      this.available = false;
      this.customer = customer;
      this.rentalDuration = rentalDuration;
      return true;
    } else {
      return false;
    }
  };
  this.return = function(){
    if (this.available){
      console.log('Sorry, this car has already been returned.');
    } else {
      this.available = true;
      this.customer = null;
      this.rentalDuration = null;
    }
  };
};

// Vendor

var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];
  this.totalRevenue = 0;

  // find car index with its ID
  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  // find customer index with its ID
  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  // get car object
  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };
  // get customer object
  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  // add car object to cars array
  this.addCar = function(carObj){
    if (this.getCar(carObj.id)===null){
      this.cars.push(carObj);
      console.log('Car added to warehouse');
    } else {
      console.log('ID already exists');
    }
  };

  // add customer object to customers array
  this.addCustomer = function(customerObj){
    if (this.getCustomer(customerObj.id)===null){
      this.customers.push(customerObj);
      console.log('Customer added to warehouse');
    } else {
      console.log('ID already exists');
    }
  };

  // remove car objects from cars array
  this.removeCar = function(carID){
    if (this.getCar(carID)===null){
      console.log('Car not found');
    } else {
      this.cars.splice(this.cars.indexOf(carID),1);
      console.log('Car has been deleted');
    }
  };

  // remove customer objects from customers array
  this.removeCustomer = function(customerID){
    if (this.getCustomer(customerID)===null){
      console.log('Customer not found');
    } else {
      this.customers.splice(this.customers.indexOf(customerID),1);
      console.log('Customer has been deleted');
    }
  };

  // return an array of available cars
  this.availableCars = function(){
    var availableCars = [];
    availableCars = this.cars.filter(function(a){
      return a.available === true;
    });
    return availableCars;
  };

  /*
    Rent a car
    attach available car object to customer.carRented
    call reserve()
  */
  this.rentCar = function(customerID, rentalDuration){
    var availableCars = this.availableCars();
    if (availableCars.length===0){
      console.log('All our cars have been rented');
    } else {
      var customer = this.getCustomer(customerID);
      if (customer===null){
        console.log('Please provide a valid customerID');
      } else {
        customer.carRented = availableCars[0];
        customer.carRented.reserve(customer, rentalDuration);
        console.log('The car has been reserved');
      }
    }
  };

  /*
    Return a car
    change customer.carRented back to null
    accumulates revenue from this transaction to this.totalRevenue
  */
  this.returnCar = function(customerID){
    var customer = this.getCustomer(customerID);
    if (customer===null){
      console.log('Please provide a valid customerID');
    } else {
      this.totalRevenue+=customer.carRented.rentalPricePerDay *customer.carRented.rentalDuration;
      customer.carRented.return();
      customer.carRented = null;
      console.log('Thank you for using our service');
    }
  };

  // print out total revenue
  this.revenue = function(){
    console.log('The total revenue is ' + this.totalRevenue + '.');
  };
};


//Customer data
var customerInfo = {
  id: "001",
  name: "Sherman"
};

var customerInfoB = {
  id: '002',
  name: 'Fiona'
};

//Car data
var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carInfoB = {
  id: "002",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 500,
};

//Create new object
var vendor = new Vendor('Jens Limited');
var customerA = new Customer(customerInfo);
var customerB = new Customer(customerInfoB);
var carA = new Car(carInfo);
var carB = new Car(carInfoB);

//add to vendor
vendor.addCustomer(customerA);
vendor.addCustomer(customerB);
console.log(vendor.availableCars());
vendor.addCar(carA);
vendor.addCar(carB);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
vendor.rentCar(customerB.id, 4);
vendor.returnCar('001');
vendor.returnCar(customerB.id);
vendor.revenue();