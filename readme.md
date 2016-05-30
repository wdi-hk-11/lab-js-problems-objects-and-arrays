## Introduction

You are to create a car rental service that stores your cars available for rental and customers who rent the cars.

### Customer Object
Your first goal is to create a Customer Object Constructor that have the following properties:

  1. id (string or number)
  2. name (string)
  3. carRented (object) (null by default)

### Car Object
Then you should create a Car Object Constructor that have the following properties:

  1. id (string or number)
  2. producer (string)
  3. model (string)
  4. rentalPricePerDay (number)
  5. available (boolean) (true by default)
  6. customer (object) (null by default)
  7. rentalDuration (number) (in days)
  8. quotePrice (function)
  9. reserve (function)
  10. return (function)

- The `quotePrice` function takes a variable call `rentalDuration` then returns the `rentalPrice * rentalDuration`

- The `reserve` function takes a `customer` object and `rentalDuration` value.

  1. This function should check if the car itself is available for rentel
  2. If yes:
    1. Change the availible status
    2. Associate this cars's `this.customer`
    3. Set this car's `this.rentalDuration`
    4. `return true`
  3. If no:
    1. `return false`

- The `return` function take no arguments.

  1. This will check if the car is available.
  2. If Yes:
    1. `return Sorry, this car have already been returned.";`
  3. If No:
    1. reset this car's `this.availible` to `true`
    2. set this car's `this.customer` to null
    3. set this car's `this.rentalDuration` to null;

### Vendor Object
After the Car Object, create a Vendor Object Constructor that have the following properties:

  1. name (string) (provided)
  2. cars (array) (empty array by default) (provided)
  3. customers (array) (empty array by default) (provided)
  4. findCarIndex (function) (provided)
  5. findCustomerIndex (function) (provided)
  6. getCar (function) (provided)
  7. getCustomer (function) (provided)
  8. addCar (function)
  9. addCustomer (function)
  10. removeCar (function)
  11. removeCustomer (function)
  12. availableCars (function)
  13. rentCar (function)
  14. returnCar (function)
  15. totalRevenue (function)

- The `findCarIndex`/`findCustomerIndex` function takes an `carID`/`customerID` and returns the index or -1.

- The `getCar`/`getCustomer` function takes a `carID`/`customerID` and returns the actual car/customer object or null.

- The `addCar`/`addCustomer` function takes a `carObj` or `customerObj`.
  1. It should check if car/customer exists using `getCar`/`getCustomer`
  2. If `car/customer is === null`
    1. push the `carObj`/`customerObj` into `cars`/`customers`
    1. `console.log("Car/Customer added to warehouse")`
  3. else
    1. `console.log("ID already exists")`

- The `removeCar`/`removeCustomer` function takes an `carID`/`customerID`.
  1. It should check if car/customer exists using `findCarIndex`/`findCustomerIndex`
  2. If car/customer is found
    1. delete that car/customer using from the cars/customers list
    2. `console.log("Car/Customer have been deleted")`
  3. else
    1. `console.log("Car/Customer not found")`

- The `availableCars` function take no arguments
  1. create a new variable `var availableCars = []`
  2. loop this the cars list
    1. Inside this loop. If the car is available, push this car to `availableCars`
  3. when the loops finish. `return availableCars`

- The `rentCar` function takes `customerID` and `rentalDuration`
  1. Get a list of available cars using using the `availableCars` function
  2. if `avialbleCars.length === 0`
    1. `console.log("All our cars have been rented")`
  3. else
    1. Get the customer using the `getCustomer` function
    2. if `customer === null`
      1. `console.log("Please provide a valid customerID");`
    3. else
      1. Set customer's `carRented` to a car
      2. run the car's `reserve` function with `customerObj` and `rentalDuration`
      3. `console.log("The car has been reserved");`

- The `returnCar` function takes a `customerID`
  1. Get customer using the function `getCustomer`
  2. if `customerIndex === null`
    1. `console.log("Please provide a valid customerID");`
  3. else
    1. run customer's carRented's `return` function
    2. set customer's carRented to `null`
    3. `console.log( "Thank you for using our service");`

- The `totalRevenue` function takes no arguments
  1. create a variable `var total = 0`;
  2. loop through cars
    1. for each car, multiple rentalDuration and rentalPrice, then add them to total
  3. when the loops finishes, `return total;`