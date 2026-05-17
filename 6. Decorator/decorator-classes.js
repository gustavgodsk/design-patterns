// Component interface
class Coffee {
    getCost() {
        return 0;
    }

    getDescription() {
        return "";
    }
}

// Concrete component
class SimpleCoffee extends Coffee {
    getCost() {
        return 5;
    }

    getDescription() {
        return "Plain Coffee";
    }
}

// Base Decorator class
class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost();
    }

    getDescription() {
        return this.coffee.getDescription();
    }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
    getCost() {
        return super.getCost() + 1;
    }

    getDescription() {
        return super.getDescription() + ", with Milk";
    }
}

class SugarDecorator extends CoffeeDecorator {
    getCost() {
        return super.getCost() + 0.5;
    }

    getDescription() {
        return super.getDescription() + ", with Sugar";
    }
}

// Usage
let myCoffee = new SimpleCoffee();
console.log(myCoffee.getDescription(), myCoffee.getCost());

myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.getDescription(), myCoffee.getCost()); // Plain coffee, with milk, with sugar
