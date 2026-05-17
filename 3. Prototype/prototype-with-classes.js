class Monster {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    attack(target) {
        console.log("Attacked target: " + target);
    }

    clone() {
        return new Monster(this.name, this.health, this.damage);
    }
}

const ogre = new Monster("Orge", 200, 30);
const ogre2 = ogre.clone();
