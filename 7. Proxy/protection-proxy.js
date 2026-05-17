class BankAccount {
    constrcutor(initialBalance) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount, "Balance:", this.balance);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
            return false;
        }

        this.balance -= amount;
        console.log("Withdrew:", amount, "Balance: ", this.balance);
        return true;
    }
}

// Proxy that limits withdrawals
class BankAccountProxy {
    constructor(realAccount) {
        this.realAccount = realAccount;
    }

    deposit(amount) {
        return this.realAccount.deposit(amount);
    }

    withdraw(amount) {
        if (amount > 100) {
            console.log("Cannot withdraw more than 100");
            return false;
        }
        return this.realAccount.withdraw(amount);
    }
}

// Usage
const account = new BankAccount(500);
const proxyAccount = new BankAccountProxy(account);

proxyAccount.deposit(50);
proxyAccount.withdraw(80);
proxyAccount.withdraw(120);
