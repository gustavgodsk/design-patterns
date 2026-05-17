// Old version
const OldPaymentSystem = {
    processPayment(amount, currency) {
        console.log("Processed payment of " + amount + " in currency " + currency);
    },
};

// New interface
class PaymentProcessor {
    constructor() {
        this.currency = "USD";
    }

    pay(amount) {
        OldPaymentSystem.processPayment(amount, this.currency);
    }
}

// Usage
const payment = new PaymentProcessor();
payment.pay(100);
