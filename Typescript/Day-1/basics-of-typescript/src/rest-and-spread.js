function countryCities(country, ...cities) {
    console.log(`In Country - ${country}`);
    for (const city of cities) {
        console.log(`   ${city}`);
    }
}
const TravellingCities = ["Bangalore", "Chennai", "Delhi", "Hyderabad"];
countryCities("India", "Bangalore", "Chennai");
countryCities("India", ...TravellingCities);
const PizzaOrder = {
    orderId: 238,
    customerId: 673,
    orderDate: new Date(),
    pizzaName: 'Veg Pizza',
    status: 'Your order has been accepted by PizzaHut!'
};
const PizzaInOven = {
    ...PizzaOrder,
    status: 'Your pizza is getting baked in Oven!'
};
const PizzaOutForDelivery = {
    ...PizzaInOven,
    status: 'Your pizza is out for delivery!'
};
console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOutForDelivery);
//# sourceMappingURL=rest-and-spread.js.map