//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
  }
  
  // Test Data
  console.log(calculateInvoice(100, 0.08, 5));  // Expected output: "Total Invoice: $103.00"
  console.log(calculateInvoice(500, 0.1, 20));  // Expected output: "Total Invoice: $530.00"

  //Task 2: Function Expression
const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
  };
  
  // Test Data
  console.log(calculateHourlyWage(52000, 40));  // Expected output: "Hourly Wage: $25.00"
  console.log(calculateHourlyWage(75000, 35));  // Expected output: "Hourly Wage: $41.21"

  //Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;
    if (years >= 5) {
      discount = 0.15;
    } else if (years >= 3) {
      discount = 0.10;
    } else {
      discount = 0.05;
    }
    const discountedPrice = amount - (amount * discount);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
  };
  
  // Test Data
  console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
  console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

  //Task 4: Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) {
    let cost = 0;
    
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
function calculateLoanInterest(principal, rate, years) {
  const interest = principal * rate * years;
  return `Total Interest: $${interest.toFixed(2)}`;
}

// Test Data
console.log(calculateLoanInterest(1000, 0.05, 3));  // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5));  // Expected output: "Total Interest: $1750.00"

//Task 6: High-Order Functions
function filterHighValueTransactions(transactions, filterFunction) {
  return transactions.filter(filterFunction);
}
// Test Data
let transactions = [500, 1200, 3000, 800, 2200];
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));
// Expected output: [1200, 3000, 2200]