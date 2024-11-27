function addition(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addition(100, 1000));
//Example of Optional Parameter
// function salesNetProfit(cogs: number, expense: number, actualSales: number, gstPercent?: number): number {
//     if (!gstPercent) gstPercent = 0;
//     const gstAmount: number = actualSales * gstPercent / 100;
//     return actualSales - (cogs + expense + gstAmount);
// }
function salesNetProfit(cogs: number, expense: number = 15000, actualSales: number, gstPercent: number = 18): number {
    if (!gstPercent) gstPercent = 0;
    const gstAmount: number = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log(`Bajaj Sales Net Profit without GST is INR ${salesNetProfit(12000, undefined, 150000)}`);
