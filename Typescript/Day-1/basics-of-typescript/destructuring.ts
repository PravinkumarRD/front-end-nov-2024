const Mobiles: string[] = ["Samsung", "Apple", "Nokia", "MotoG", "Oppo"];
let [m1, m2, ...mbs] = Mobiles;

const Order = {
    orderId: 783,
    orderDate: new Date(),
    quantity: 80,
};
var { orderDate, ...abc } = Order;
console.log(abc);

//let { orderDate,orderId, quantity } = Order;
let orderId: number, oDate: Date, qty: number;
({ orderId, orderDate: oDate, quantity: qty } = Order);
console.log(oDate);