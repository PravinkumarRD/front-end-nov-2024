//Array Destructuring Syntax
const Mobiles = ["Samsung", "Apple", "Nokia", "MotoG", "Oppo"];

//let [m1, m2, m3, m4, m5] = Mobiles;
//let [m1, , m3, m4, m5] = Mobiles;
let [m1, m2, ...mbs] = Mobiles;
console.log(mbs);

//Object Destructuring Syntax
const Order = {
  orderId: 783,
  orderDate: new Date(),
  quantity: 80,
};
var { orderDate, ...abc } = Order;
console.log(abc);

//let { orderDate,orderId, quantity } = Order;
let orderId, oDate, qty;
({ orderId, orderDate: oDate, quantity: qty } = Order);
console.log(oDate);

let greetings = "Hello";
let [a, b, c, d, e] = greetings;
console.log(e);