// Customer Object
var Customer = function (customerInfo) {
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
  this.available = true;
  this.customer = null;
  this.rentalDuration = 0;
  this.quotePrice = function(rentalDuration){
     return this.rentalPrice * rentalDuration;
  };
  this.reserve = function(customerObj,rentalDuration) {
      if (this.available === true) {
        this.available = false;
        this.customer = customerObj;
        this.rentalDuration = rentalDuration;
        return true;
      } else {
        return false;
      }
  };
  this.return = function() {
     if (this.available === true) {
      console.log('Sorry, this car has already been returned.');
     } else {
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

// this function returns the index or -1
  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

// this function returns the index or -1
  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

// returns the car object or undefined
  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

// returns the customer object or undefined
  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

//
  this.addCar = function (carObj) {
    // checking if car exists using getCar
    if (this.getCar === true) {
  // if it exists, print 'ID already exist'
      console.log('ID already exist');
    } else {
// pushing carObj into cars
      this.cars.push(carObj);
      console.log('Car added to warehouse');
    }
  };

  this.addCustomer = function (customerObj) {
    if (this.getCustomer === true) {
      console.log('ID already exist');
    } else {
      this.customers.push(customerObj);
      console.log('Customer added to warehouse');
    }
  };

  this.removeCar = function (carID) {
// checking if car exists using findCarIndex
// findCarIndex returns the index if car found, or if not found, returns -1
if (this.findCarIndex >= 0) {

// delete that car from cars list
// using array.splice:
// first element is starting at which index
// second element states removing how many elements, in this case, 1
     cars.splice(this.findCarIndex, 1);

 console.log('Car deleted');
  } else {
 console.log('Car not found');
  };

  };

  this.removeCustomer = function (customerID) {
// checking if customer exists using findCustomerIndex

// findCustomerIndex returns the index if customer found, or if not found, returns -1
if (this.findCustomerIndex >= 0) {

// delete that customer from customers list
   customers.splice(this.findCustomerIndex, 1);
 console.log('Customer deleted');
  } else {
 console.log('Customer not found');
  };

  };

// availableCars take no argument
  this.availableCars = function () {
  // using array.filter to generate an array of cars available for rent

   return cars.filter();

  };

  this.rentCar = function (customerID, rentalDuration) {
// get a list of available cars using the availableCars function
     return this.availableCars;

     if (availableCars.length === 0) {
      console.log('All our cars have been rented');
     } else /* get customer using getCustomer
    and if found: */
     if (this.getCustomer === true) {
      carRented = this.availableCars[0];
      this.reserve(customerObj, rentalDuration);
      console.log('The car has been reserved');
     } else {
      console.log("Please provide a valid customerID");
       };

     };
  };

   this.returnCar = function(customerID) {
     if (this.getCustomer === true) {
// run customer's carRented's return function
      this.carRented.return();
// set customer's carRented to null
      carRented = null;
      console.log("Thank you for using our service");
     } else {
      console.log("Please provide a valid customerID");
     };
  };

  this.totalRevenue = function () {
//    var total = 0;
 //   array.reduce
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