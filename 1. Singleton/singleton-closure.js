// Singleton: Closure implementation
const ConfigSingleton = (function() {
    let instance;

    function createInstance() {
        return {
            env: "prod",
            apiKey: "ABC-123",
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

//USAGE
const configA = ConfigSingleton.getInstance();
const configB = ConfigSingleton.getInstance();
console.log(configA === configB); //true
