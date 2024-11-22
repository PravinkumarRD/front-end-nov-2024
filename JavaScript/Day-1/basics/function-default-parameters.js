//Sales Net Profit Calculation = Incoming Money - Outgoing Money
//COGS, Expense, ActualSales, Gst

const BajajGstPercent = 10;

const IndiaGstChart = {
  IT: 18,
  FOOD: 5,
  TRAVEL: 12,
};

function getGetPercent() {
  return IndiaGstChart.TRAVEL;
}

function salesNetProfit(
  cogs,
  expense = 15000,
  actualSales,
  gstPercent = getGetPercent()
) {
  const gstAmount = (actualSales * gstPercent) / 100;
  return actualSales - (cogs + expense + gstAmount);
}

console.log(
  `Bajaj Sales Net Profit without GST is INR ${salesNetProfit(
    12000,
    13000,
    150000
  )}/-`
);
console.log(
  `Bajaj Sales Net Profit with 18% GST is INR ${salesNetProfit(
    12000,
    13000,
    150000,
    18
  )}/-`
);

console.log(salesNetProfit(12000, undefined, 150000));

//How do you pass limitless/boundless number of parameter to a function? It should be packed in an Array?
//REST Parameter - This paramter packs the comma separated values in an Array
function printOffices(country, ...cities) {
  console.log(`In Country ${country}, below are the cities - `);
  console.log(cities);
  for (const city of cities) {
    console.log(city);
  }
}

const MyWorkingCities = ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Pune"];

printOffices("India", "Bangalore", "Mumbai");
console.log("");
printOffices("India", "Bangalore", "Mumbai", "Chennai");
console.log("");
//SPREAD Operator - It unpacks the collection [Array/Object] values
printOffices("India", ...MyWorkingCities);
console.log("");
console.log(...MyWorkingCities);
console.log("");

const PizzaOrder = {
  orderId: 7873,
  customerId: 8977,
  orderDate: new Date(),
  pizzaName: "Veg Pizza",
  price: 350,
  status: "Pizza Hut has accepted your order!",
};

const PizzaInOven = {
  ...PizzaOrder,
  status: "Your pizza is getting baked!",
  discount: 10,
};

const PizzaOutForDelivery = {
  ...PizzaInOven,
  status: "Your pizza is out for delivery!",
};

console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOutForDelivery);
