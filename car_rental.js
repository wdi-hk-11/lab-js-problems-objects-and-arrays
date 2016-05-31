/* Customer Object
Added ID
Added Name
Added car
Added carRented object function
*/
var Customer = function (customerInfo) {

  this.id = " ";
  this.name = " ";
  this.rented = null;
  var carRented = function (customerInfo) {
  this.rented = null;
  };
};

/* Car Object
Added:
id
producer
model
rentalPricePerDay
availability
rentalDuration
rentalDuration

customer Object
quote Price Function
reserve function 
return function
*/
var Car = function (carInfo) {
  this.id = " ";
  this.producer = " ";
  this.model = " ";
  this.rentalPricePerDay = 0 ;
  this.available = true;
  this.rentalDuration = (0) + "Days";
//Customer Object
  var Customer = function (customerDetails) {
    this.customerDetails = null;
  };
//Quote Price Function
  var quotePrice = function (rentalDuration, rentalPrice) {
    return (rentalPrice * rentalDuration);
  };
// Reserve function
  var reserved = function (customer, rentalDuration){
    if (this.Car.available === true) {
      this.Car.available = false;
        Car.customerDetails = this.customer;
          Car.rentalDuration = this.rentalDuration;
            return true; }
              else {
                return false;
    }
//returnCar function
  var returnCar = function (customerID) {
    if (Car.available === true) {
      return "Sorry, this car have already been returned.";
    }
    else {
      Car.available = true;
      Customer.rented = null;
      Car.rentalDuration = null;
    }
    };
  };/* Customer Object
Added ID
Added Name
Added car
Added carRented object function
*/
var Customer = function (customerInfo) {

  this.id = " ";
  this.name = " ";
  this.rented = null;
  var carRented = function (customerInfo) {
  this.rented = null;
  };
};

/* Car Object
Added:
id
producer
model
rentalPricePerDay
availability
rentalDuration
rentalDuration

customer Object
quote Price Function
reserve function 
return function
*/
var Car = function (carInfo) {
  this.id = " ";
  this.producer = " ";
  this.model = " ";
  this.rentalPricePerDay = 0 ;
  this.available = true;
  this.rentalDuration = (0) + "Days";
//Customer Object
  var Customer = function (customerDetails) {
    this.customerDetails = null;
  };
//Quote Price Function
  var quotePrice = function (rentalDuration, rentalPrice) {
    return (rentalPrice * rentalDuration);
  };
// Reserve function
  var reserved = function (customer, rentalDuration){
    if (this.Car.available === true) {
      this.Car.available = false;
        Car.customerDetails = this.customer;
          Car.rentalDuration = this.rentalDuration;
            return true; }
              else {
                return false;
    }
//returnCar function
  var returnCar = function (customerID) {
    if (Car.available === true) {
      return "Sorry, this car have already been returned.";
    }
    else {
      Car.available = true;
      Customer.rented = null;
      Car.rentalDuration = null;
    }
    };
  };
  };

/* Vendor Object
Added:
ddCar function
addCustomer function
removeCar function
remove Customer funcion
available cars function
rentCar function
returnCar function
totalRevenue function
*/
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];
//Find car index function
  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };
// findCustomerIndex function
  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };
//getCar Function
  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };
//getCustomer function
  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };
//addCar Function
  this.addCar = function (carObj) {
    var index = this.getCar(carObj);
      if (index <= 1){
        console.log("Car already exsists");
        } else {
          this.cars.push(carObj);
          console.log("Car have been added");
        }
        };
//addCustomer function
  this.addCustomer = function (customerObj) {
    var index = this.getCustomer(customerObj);
      if (index <= 1) {
        console.log("ID exsists in database");
      }
      else {
        this.customers.push(customerObj);
        console.log("Customer added to warehouse");
      }
  };
//remove car function
  this.removeCar = function (carID) {
    var index = this.findCarIndex(carID);
      if (index >= 0) {             
        this.cars.splice(index, 1);
      } else {
            return null;
          }
  };
//remove customer function
  this.removeCustomer = function (customerID) {
    var index = this.findCustomerIndex(customerID);
      if (index >= 0) {
        this.customer.splice(index, 1);
      } else {
          return null;
      }
  };
//available cars function
  this.availableCars = function () {
    Car.filter(function(car) { (this.car.available === true); });
  };
//rentCar function
  this.rentCar = function (customerID, rentalDuration) {
    console.log(this.availableCars);
    if (this.avalibleCars.length === 0) {
      console.log("All our cars have been rented");
    } else {
       var customersID = Vendor.getCustomer(customerID);
          if (customersID === null) {
            console.log ("please provide valid info");
          } else {
            Customer.carRented = Car[0];
            console.log("The Car have been reserve");
            return Car.reserved(customersID, rentalDuration);
          }
    }
  };
//return Car function
  this.returnCar = function (customerID) {
    var customerIndex = Vendor.getCustomer(customerID);
    if (this.customerIndex === null) {
      console.log("Please provide valid customerID");
    } else {
      Car.available = true;
      Customer[customerIndex].carRented === null;
      console.log("Thank you for using our service");
    }
  };
//totalRevenue function
  this.totalRevenue = function () {
    var total = 0;
    this.Car.reduce(pv,cv); {
      this.total = pv + (cv.rentalDuration * cv.rentalPrice);
      console.log(this.total);
    }
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
  };

/* Vendor Object
Added:
ddCar function
addCustomer function
removeCar function
remove Customer funcion
available cars function
rentCar function
returnCar function
totalRevenue function
*/
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];
//Find car index function
  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };
// findCustomerIndex function
  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };
//getCar Function
  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };
//getCustomer function
  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };
//addCar Function
  this.addCar = function (carObj) {
    var index = this.getCar(carObj);
      if (index <= 1){
        console.log("Car already exsists");
        } else {
          this.cars.push(carObj);
          console.log("Car have been added");
        }
        };
//addCustomer function
  this.addCustomer = function (customerObj) {
    var index = this.getCustomer(customerObj);
      if (index <= 1) {
        console.log("ID exsists in database");
      }
      else {
        this.customers.push(customerObj);
        console.log("Customer added to warehouse");
      }
  };
//remove car function
  this.removeCar = function (carID) {
    var index = this.findCarIndex(carID);
      if (index >= 0) {             
        this.cars.splice(index, 1);
      } else {
            return null;
          }
  };
//remove customer function
  this.removeCustomer = function (customerID) {
    var index = this.findCustomerIndex(customerID);
      if (index >= 0) {
        this.customer.splice(index, 1);
      } else {
          return null;
      }
  };
//available cars function
  this.availableCars = function () {
    return this.Car.filter (function(car) { (this.car.available === true); });
  };
//rentCar function
  this.rentCar = function (customerID, rentalDuration) {
    console.log(this.availableCars);
    if (this.avalibleCars.length === 0) {
      console.log("All our cars have been rented");
    } else {
       var customersID = Vendor.getCustomer(customerID);
          if (customersID === null) {
            console.log ("please provide valid info");
          } else {
            Customer.carRented = Car[0];
            console.log("The Car have been reserve");
            return Car.reserved(customersID, rentalDuration);
          }
    }
  };
//return Car function
  this.returnCar = function (customerID) {
    var customerIndex = Vendor.getCustomer(customerID);
    if (this.customerIndex === null) {
      console.log("Please provide valid customerID");
    } else {
      returned (customerID);
      Customer[customerIndex].carRented === null;
      console.log("Thank you for using our service");
    }
  };
//totalRevenue function
  this.totalRevenue = function () {
    var total = 0;
    this.Car.reduce(function(pv,cv); ) {
      this.total = pv + (cv.rentalDuration * cv.rentalPrice);
      console.log(this.total);
    }
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
vendor.addCustormer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);