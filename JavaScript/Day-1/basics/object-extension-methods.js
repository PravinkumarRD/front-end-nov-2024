const SimpleObject1 = {
  one: 100,
  two: 200,
  three: 300,
  "hello world": "Bajaj",
};
SimpleObject1["hello world"];
console.log(Object.entries(SimpleObject1));

const MyKeyValueCollection = [
  ["one", 100],
  ["two", 200],
  ["three", 300],
];
console.log(Object.fromEntries(MyKeyValueCollection));

console.log(Object.keys(SimpleObject1));
console.log(Object.values(SimpleObject1));

for (const key in SimpleObject1) {
  console.log(SimpleObject1[key]);
}

const obj1 = {};
const obj2 = {};

console.log(Object.is("Hello", "hello"));

const Order = {
  orderId: 23489,
  orderDate: new Date(),
  requiredDate: new Date(),
  customerId: 5644,
};
const OrderDetail = {
  orderDetailId: 1,
  quantity: 10,
  unitPrice: 900,
  productId: 67,
  deliveryId: 5555,
};

Object.defineProperty(OrderDetail, "discount", {
  value: 10,
  //enumerable: true,
});

const CustomerOrder = {
  deliveryId: 786,
};
Object.assign(CustomerOrder, Order, OrderDetail);
//OrderDetail.quantity = 100;
console.log(CustomerOrder);
const BajajCustomerOrder = {
  ...Order,
  ...OrderDetail,
};
console.log(BajajCustomerOrder);

const Customer = {
  customerId: 2389,
  contactName: "Alisha C.",
  city: "Mumbai",
  getCustomerData() {
    return `Customer ${this.contactName} lives in city ${this.city}!`;
  },
};

console.log(Customer.getCustomerData());
