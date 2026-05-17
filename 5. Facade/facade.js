class CPU {
    start() {
        console.log("CPU Started");
    }
}

class Memory {
    load(address, data) {
        console.log("Loaded data " + data + " into memory at adress " + address);
    }
}

class HardDrive {
    read(sector, size) {
        console.log("Read " + size + " bytes from sector " + sector);
        return "bootloader";
    }
}

// Facade
class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hd = new HardDrive();
    }

    startComputer() {
        console.log("Starting computer...");
        const bootData = this.hd.read(0, 512);
        this.memory.load(0, bootData);
        this.cpu.start();
        console.log("Computer started.");
    }
}
