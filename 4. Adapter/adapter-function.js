// Old function
function oldLog(msg) {
    console.log("Old log message: " + msg);
}

// New adapter
const newLogger = {
    log(message) {
        oldLog(message);
    },
};

// Usage
newLogger.log("Hello");
