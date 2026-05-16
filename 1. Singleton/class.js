// Singleton: Class implementation
class SingletonLogger {
    constructor() {
        if (SingletonLogger._instance) {
            throw new Error("Use getInstance instead of new");
        }
        SingletonLogger._instance = this;
    }

    static getInstance() {
        return SingletonLogger._instance || new SingletonLogger();
    }
}

// Usage
const logger1 = SingletonLogger.getInstance();
const logger2 = SingletonLogger.getInstance();
console.log(logger1 === logger2); //true
