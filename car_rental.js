// Customer Object
var Customer = function (customerInfo) {
  this.id =customerInfo.id;
  this.name=customerInfo.name;
  this.carRented={};
};

// Car Object
var Car = function (carInfo) {
  this.id=carInfo.id;
  this.producer=carInfo.producer;
  this.model=carInfo.model;
  this.rentalPricePerDay=carInfo.rentalPrice;
  this.available=true;
  this.customer={};
  this.rentalDuration=0;
  this.revenue=0;
  this.quotePrice=function(rentalDuration){
    return rentalPrice*rentalDuration;
  };
  this.reserve=function(customer, rentalDuration){
      if (this.available){
        this.available=false;
        this.customer=customer;
        this.rentalDuration=rentalDuration;
        return true;
      }
      else{
        return false;
      };

  };
  this.return=function(){
      if (this.available){
        return "Sorry,this car has already been returned.";
      }
      else
       {
        this.available=true;
        this.customer={};
        this.rentalDuration={};
       };
  };
};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];
  this.revenue=0;


//The findCarIndex/findCustomerIndex function takes an carID/customerID and returns the index or -1.
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

//The getCar/getCustomer function takes a carID/customerID and returns the actual car/customer object or undefined.


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


//The addCar/addCustomer function takes a carObj or customerObj.
// Check if car/customer exists using getCar/getCustomer
// If car/customer is found
// console.log("ID already exists")
// Else
// Push the carObj/customerObj into cars/customers list
// console.log("Car/Customer added to warehouse")

  this.addCar= function(carObj){
     var car=this.getCar(carObj.carID);
     if (car === undefined){
      this.cars.push(carObj);
      console.log("Car added to warehouse");
     }else
     {
      console.log("Car ID exists");
     }


  };

  this.addCustormer= function(customerObj){
      var customer=this.getCustomer(customerObj.customerID);
     if (customer === undefined){
      this.customers.push(customerObj);
      console.log("Customer added to warehouse");
     }else
     {
      console.log("Customer ID exists");
     }

  };


//The removeCar/removeCustomer function takes an carID/customerID.

// Check if car/customer exists using findCarIndex/findCustomerIndex
// If carIndex/customerIndex >= 0
// Delete car/customer from the cars/customers list using array.splice
// console.log("Car/Customer deleted");
// Else
// console.log("Car/Customer not found")
  this.removeCar= function(carID){

    var carIndex=this.findCarIndex(carID);
    if (carIndex>=0){
      this.cars.splice(carIndex,1);
      console.log("Car deleted");
    }else{
      console.log("Car not found");
    };

  };

  this.removeCustomer= function(customerID){
    var customerIndex=this.findCarIndex(carID);
    if (customerIndex>=0){
      this.customers.splice(customerIndex,1);
      console.log("Customer deleted");
    }else{
      console.log("Customer not found");
    };
  };

//The availableCars function take no arguments. Use the array.filter to generate an array of cars available for rent.
  this.availableCars= function(){

   var filtered = this.cars.filter(function(a){
     return a.available === true;
    });
   return filtered;

  };

//The rentCar function takes customerID and rentalDuration


  this.rentCar=function(customerID,rentalDuration){
    var list=this.availableCars();
    if (list.length === 0){
      console.log("All our cars have been rented");
    }else{
       var customer=this.getCustomer(customerID);
       if (customer!=undefined){
        customer.carRented =list[0];
        customer.carRented.reserve(customer,rentalDuration);
       console.log("The car has been reserved");
       this.revenue += customer.carRented.rentalDuration*customer.carRented.rentalPricePerDay;
      }else{
        console.log ("Please provide a valid customerID");
      }
    }

  };



  this.returnCar=function(customerID){
    var customer=this.getCustomer(customerID);
     if (customer!=null){
        customer.carRented.return();
        customer.carRented=null;
         console.log ("Thank you for using our service");

      }
      else{
        console.log ("Please provide a valid customerID");
      }

  };


   this.totalRevenue = function(){
     console.log('The total revenu= ' + this.revenue); };

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

