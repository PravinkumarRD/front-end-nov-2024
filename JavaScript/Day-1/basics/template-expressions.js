const Customer = {
  customerId: 2389,
  contactName: "Manish Sharma",
  city: "Pune",
};

console.log(
  `Customer with Id ${Customer.customerId} with 
    Name ${Customer.contactName} lives in city ${Customer.city}!`
);

let row = `<tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>`;
function generateRow(customerId, contactName, city) {
  return `<tr>
            <td>${customerId}</td>
            <td>${contactName}</td>
            <td>${city}</td>
    </tr>`;
}

console.log(
  generateRow(Customer.customerId, Customer.contactName, Customer.city)
);
