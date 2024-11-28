//To avoid naming conflicts, we use namespaces and grouping related contents

enum CardTypes {
    CREDIT,
    DEBIT
}

namespace Payment {
    export namespace COD {
        export function makePayment(customerId: number, orderId: number, amount: number): string {
            return `Customer Id ${customerId} needs to pay INR ${amount} for Order Number ${orderId} by Cash!`;
        }
    }
    export namespace Wallet {
        export function makePayment(customerId: number, orderId: number, amount: number, walletName: string): string {
            return `Customer Id ${customerId} needs to pay INR ${amount} for Order Number ${orderId} by Wallet ${walletName}!`;
        }
    }
    export namespace netBanking {
        export function makePayment(customerId: number, orderId: number, amount: number, bankName: string, card: CardTypes): string {
            const cartType = card == 0 ? "CREDIT" : "DEBIT";
            return `Customer Id ${customerId} needs to pay INR ${amount} for Order Number ${orderId} by Bank ${bankName} using ${cartType} Card!`;
        }
    }
}

console.log(Payment.COD.makePayment(2378, 1223, 1000));
console.log(Payment.Wallet.makePayment(2378, 1223, 1000, "PayTM"));
console.log(Payment.netBanking.makePayment(2378, 1223, 1000, "HDFC", 1));
