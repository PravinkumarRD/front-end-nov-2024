const Customer = {
    customerId: 2389,
    contactName: 'Alisha C.',
    city: 'Mumbai'
}

//Customer with Id 2389 and name Alisha C. lives in city Mumbai!

function getCustomerInfo(): string {
    return `Customer with Id ${Customer.customerId} and name ${Customer.contactName} lives in city ${Customer.city}!`
}
console.log(getCustomerInfo());