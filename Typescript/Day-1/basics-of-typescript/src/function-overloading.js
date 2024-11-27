const Inventory = [
    {
        productId: 1200,
        productName: 'Apple 13 Pro',
        unitPrice: 72000,
        company: 'Apple',
        stock: 46
    },
    {
        productId: 1201,
        productName: 'Apple 14 Pro',
        unitPrice: 122000,
        company: 'Apple',
        stock: 34
    },
    {
        productId: 1202,
        productName: 'Samsung Galaxy',
        unitPrice: 32000,
        company: 'Samsung',
        stock: 13
    },
    {
        productId: 1203,
        productName: 'Samsung Note',
        unitPrice: 82000,
        company: 'Samsung',
        stock: 56
    },
    {
        productId: 1204,
        productName: 'Nokia 7',
        unitPrice: 34000,
        company: 'Nokia',
        stock: 78
    }
];
function searchProducts(value) {
    const AllProducts = [...Inventory];
    const products = [];
    if (typeof (value) === 'number') {
        for (const product of AllProducts) {
            if (product.stock > value)
                products.push(product.productName);
        }
    }
    else {
        for (const product of AllProducts) {
            if (product.company === value)
                products.push(product.productName);
        }
    }
    return products;
}
console.log(searchProducts(30));
console.log(searchProducts('Apple'));
//# sourceMappingURL=function-overloading.js.map