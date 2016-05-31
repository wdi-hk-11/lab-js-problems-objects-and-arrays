// Customer Object
var Customer = function (customerInfo) {
  this.id         = customerInfo.id;
  this.name       = customerInfo.name;
  this.carRented  = null;
};

// Car Object
var Car = function (carInfo) {
  this.id                = carInfo.id;
  this.producer          = carInfo.producer;
  this.model             = carInfo.model;
  this.rentalPricePerDay = carInfo.rentalPricePerDay;
  this.available         = true;
  this.customer          = null;
  this.rentalDuration    = 0;
  this.quotePrice        = carInfo.quotePrice;
  this.reserve           = carInfo.reserve;
  this.return            = carInfo.return;

  this.quotePrice = function (rentalDuration){
  return this.rentalPrice*this.rentalDuration;
  }

  this.reserve = function (customer, rentalDuration){
  if(this.available){
    this.available      = false;
    this.rentalDuration = rentalDuration;
    this.customer       = customer;
    return true;
  } else {
    return false;
  }
  }

  this.return = function (){
    if(this.available){
      return "Sorry, this car has already been returned.";
    } else {
      this.available      = true;
      this.customer       = null;
      this.rentalDuration = null;
    }
  }
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
    var car = this.getCar(carObj)
      if (car){
        console.log("ID already exists");
      } else {
        this.cars.push(carObj);
        console.log("Car added to warehouse");
        }
      }

  this.addCustomer = function (customerObj) {
    var customer = this.getCustomer(customerObj)
      if (customer){
        console.log("ID already exists");
      } else {
        this.customers.push(customerObj);
        console.log("Customer added to system");
        }
      }


  this.removeCar = function (carID) {
   var carExists = this.findCarIndex(carID)
    if(carExists >= 0) {
      this.car.splice(carExists,1);
      console.log("Car deleted");
    } else {
      console.log("Car not found");
    }
   }


  this.removeCustomer = function (customerID) {
   var customerExists = this.findCustomerIndex(customerID)
    if(customerExists >= 0) {
      this.customer.splice(customerExists,1);
      console.log("Customer deleted");
    } else {
      console.log("Customer not found");
    }
   }


  this.availableCars = function () {
    return this.cars.filter(function (car){
     return car.available === true;
    })
  }

  this.rentCar = function (customerID, rentalDuration){
    var availableCars = this.availableCars();
    if (availableCars.length === 0){
      //if there are no cars in the array then log no cars available
      console.log("All our cars have been rented");
    } else {
        //if there is a customerID then assign car
        var customer = this.getCustomer(customerID);
                if (customer){
          //assigns first car available in the array
          return customer.carRented = this.cars[0];
          car.reserve(customer,rentalDuration)
            console.log("This car has been reserved");
          } else {
            console.log("Please provide a valid customer ID")
          }
        }
      }

  this.returnCar = function (customerID){
    var getCustomer = this.getCustomer(customerID)
      if (getCustomer) {
        return getCustomer.carRented = null;
        console.log("Thank you for using our service");
      } else {
        console.log("Please provide a valid customer ID")
      }
  }

  this.totalRevenue = function() {
    var total = 0;
    this.cars.reduce(function(pV,cV){
      return total = pV + (cV.rentalDuration*cV.rentalPrice);
    })
  }
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
  model: "Supra",
  rentalPrice: 200,
};

var carInfo2 = {
  id: "002",
  producer: "Ferrari",
  model: "LaFerrari",
  rentalPrice: 2000,
};

var carA = new Car(carInfo);
var carB = new Car(carInfo2);

var vendor = new Vendor('Jens Limited');
vendor.addCustomer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
vendor.addCar(carB);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);