// Customer Object
var Customer = function (customerInfo) {
  this.id = customerInfo.id;
  this.name = customerInfo.name;
  this.carrented = customerInfo.carrented;
};

// Car Object
var Car = function (carInfo) {
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPricePerDay = carInfo.rentalPricePerDay;
  this.available = carInfo.available;
  this.rentalDuration = carInfo.rentalDuration;

  this.quoteprice = function (){};
  this.reserve = function (customersobj,rentalDuration){

    if (this.available == true){
    customersobj.carrented = this;
    console.log("Car reserved");
    console.log(customersobj);
    this.available = false;
    this.rentalDuration = rentalDuration;
    console.log(this);
    return true;
  } else {
    console.log("already reserved");
    return false;}
  };
  this.return = function (customersobj){
    vendor.calculatetotalrevenue(this.rentalDuration , this.rentalPricePerDay);

    this.available = true;
    this.rentalDuration = null;
    console.log("car has return");

    customersobj.carrented = null;

  };
  // ** your code here**
};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];
  this.totalrevenue = 0


  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.addcar = function (newcar){

     this.cars.push(newcar);

  return this.cars;

  };




 this.addCustomer = function (newcustom){

     this.customers.push(newcustom);

  return this.customers;

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
    // Joice Solution
    // var index = this.findCustomerIndex(customerID);
    // if (index >= 0){
    //   return this.customers[index];
    // } else {
    //   return null;
    // }
  };

   this.availableCars = function (){
  var availableCars = this.cars.filter(function(car){

  return car.available === true;}
);

  return availableCars;
 };

 this.rentCar = function (customerID,rentalDuration){

 if (vendor.availableCars === 0 ){ console.log("no car available");} else
    { console.log("can rent car");

     if (this.getCustomer(customerID)){
        console.log("Correct ID");
        var customerobj = this.getCustomer(customerID);
        var freecars = vendor.availableCars();
        freecars[0].reserve(customerobj,rentalDuration);


      }else { console.log("Please provide a valid customerID");}

    }

  };

  this.returnCar = function(customerID){
    if (this.getCustomer(customerID)){
      console.log("Thankyou for using our service");
      var customerobj = this.getCustomer(customerID);
      customerobj.carrented.return(customerobj);
      console.log(customerobj);
    } else { console.log("Please provide a valid customerID");}


  };

  this.calculatetotalrevenue = function(rentalDuration, rentalPricePerDay){

console.log("revenue for this car rental");
    console.log(rentalDuration * rentalPricePerDay);
    vendor.totalrevenue = vendor.totalrevenue + ( rentalDuration * rentalPricePerDay);
     console.log("totalrevenue");
    console.log(vendor.totalrevenue);
  };
  // **your code here**



};


// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman",
  carrented:"",
};

var customerInfo2 = {
  id: "002",
  name: "David",
  carrented:"",
};
var customerA = new Customer(customerInfo);
var customerB= new Customer(customerInfo2);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPricePerDay: 170,
  available: true,
  customers: "",
  rentalDuration: 0,

};

var carInfo2 = {
  id: "002",
  producer: "Benz",
  model: "Subra",
  rentalPricePerDay: 200,
  available: true,
  customers: "",
  rentalDuration:0,

};

var carInfo3 = {
  id: "003",
  producer: "Toyota",
  model: "Subra",
  rentalPricePerDay: 200,
  available: true,
  customers: "",
  rentalDuration: 0,

};

var carA = new Car(carInfo);
var carB = new Car(carInfo2);
var carC = new Car(carInfo3);
var vendor = new Vendor('Jens Limited');

vendor.addcar(carA);
vendor.addcar(carB);
vendor.addcar(carC);
vendor.addCustomer(customerA);
vendor.addCustomer(customerB);
vendor.rentCar(customerA.id,2);
vendor.rentCar(customerB.id,5);
vendor.returnCar(customerB.id);
vendor.returnCar(customerA.id);
vendor.rentCar(customerA.id,1);
vendor.returnCar(customerA.id);
