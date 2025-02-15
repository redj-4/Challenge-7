//Task 1: Function Declaration
//This function calculates the final invoice amount by applying tax and subtracting a discount.
// The formula used is: Total = (Subtotal + (Subtotal * Tax Rate)) - Discount.
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
  }
  
  // Test Data for Task 1
  console.log(calculateInvoice(100, 0.08, 5));  // Expected output: "Total Invoice: $103.00"
  console.log(calculateInvoice(500, 0.1, 20));  // Expected output: "Total Invoice: $530.00"

  //Task 2: Function Expression
  // This function expression calculates an employee's hourly wage by dividing the annual salary by the total number of work hours per year.
const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
  };
  
  // Test Data
  console.log(calculateHourlyWage(52000, 40));  // Expected output: "Hourly Wage: $25.00"
  console.log(calculateHourlyWage(75000, 35));  // Expected output: "Hourly Wage: $41.21"

  //Task 3: Arrow Function
  //This arrow function calculates a discounted price based on loyalty years.
  // Different discount rates are applied: 15% for 5 or more years, 10% for 3 or more years, and 5% otherwise.
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;
      // Determine the discount percentage based on loyalty years.
    if (years >= 5) {
      discount = 0.15;
    } else if (years >= 3) {
      discount = 0.10;
    } else {
      discount = 0.05;
    }
    const discountedPrice = amount - (amount * discount);       // Calculate the final price after applying the discount.
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;   // Return the discounted price formatted as a string with two decimal places.
  };
  
  // Test Data
  console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
  console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

  //Task 4: Parameters and Arguments
  // This function calculates the shipping cost based on weight, location, and whether expedited shipping is selected.
  // It uses different base costs and per-pound rates for USA and Canada, and adds an extra fee for expedited shipping.
function calculateShippingCost(weight, location, expedited = false) {
    let cost = 0;
      // This determine cost based on the shipping location.
    if (location === "USA") {
      cost = 5 + (weight * 0.5);
    } else if (location === "Canada") {
      cost = 10 + (weight * 0.7);
    } else {
      return "Invalid location";
    }
    
    if(expedited) {
      cost += 10;
    }
    
    return `Shipping Cost: $${cost.toFixed(2)}`;
  }
  
  // Test Data
  console.log(calculateShippingCost(10, "USA", true));   // Expected output: "Shipping Cost: $20.00"
  console.log(calculateShippingCost(5, "Canada", false));  // Expected output: "Shipping Cost: $13.50"

 //Task 5:Returning Values
 // This function calculates the total interest for a business loan using the formula: Interest = Principal * Rate * Years.
function calculateLoanInterest(principal, rate, years) {
  const interest = principal * rate * years;
  return `Total Interest: $${interest.toFixed(2)}`;
}

// Test Data
console.log(calculateLoanInterest(1000, 0.05, 3));  // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5));  // Expected output: "Total Interest: $1750.00"

//Task 6: High-Order Functions
// This higher-order function filters an array of transaction amounts based on a given condition provided by a filter function.
function filterHighValueTransactions(transactions, filterFunction) {
    // Use the Array.filter method to return only those transactions that satisfy the filterFunction.
  return transactions.filter(filterFunction);
}
// Test Data
let transactions = [500, 1200, 3000, 800, 2200];
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));
// Expected output: [1200, 3000, 2200]

//Task 7: Closures
// This function demonstrates a closure by creating a budget tracker that keeps a running balance.
// It returns an inner function that subtracts an expense from the balance each time it is called.
function createBudgetTracker() {
  let balance = 0;
  return function(expense) {
    balance -= expense;
    return `Current Balance: -$${Math.abs(balance)}`;
  }
}

// Test Data
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"

//Task 8: Recursion in Javascript
// This recursive function projects revenue growth by increasing the revenue by 5% each year until reaching year 10. 
// Once year 10 is reached or exceeded, it returns the projected revenue.
function calculateGrowth(years, revenue) {
  if (years >= 10) {
    return `Projected Revenue: $${revenue.toFixed(2)}`;
  }
  return calculateGrowth(years + 1, revenue * 1.05);
}

// Test Data
console.log(calculateGrowth(8, 1000)); // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected output: "Projected Revenue: $6381.41"