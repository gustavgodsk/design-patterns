function addLogging(fn) {
    return function(...args) {
        console.log("Calling " + fn.name + " with args", args);
        const result = fn.apply(this, args);
        console.log(fn.name + " returned ", result);
        return result;
    };
}

function multiply(a, b) {
    return a * b;
}

// Usage
const multiplyWithLogging = addLogging(multiply);
multiplyWithLogging(2, 3);
