function createEmployee(role, name) {
    if (role === "developer") {
        return new Developer(name);
    } else if (role === "manager") {
        return new Manager(name);
    }
    throw new Error("Unknown role: " + role);
}

class Developer {
    constructor(name) {
        this.name = name;
        this.type = "developer";
    }
}

class Manager {
    constructor(name) {
        this.name = name;
        this.type = "manager";
    }
}

// Usage
const emp1 = createEmployee("developer", "Bob");
const emp2 = createEmployee("manager", "Tom");

// Alternative implementation

const classMap = {
    developer: Developer,
    manager: Manager,
};

function createEmployee2(role, name) {
    const EmployeeClass = classMap[role];
    if (!EmployeeClass) throw new Error("Unknown role: " + role);
    return new EmployeeClass(name);
}
