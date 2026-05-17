const enemyPrototype = {
    health: 100,
    speed: 10,
    attack(target) {
        console.log("Attacked target: " + target);
    },
};

const goblinPrototype = Object.create(enemyPrototype);
goblinPrototype.name = "Goblin";
goblinPrototype.damage = 15;

function cloneEnemy(proto) {
    const newEnemy = Object.create(proto);
    return newEnemy;
}

const goblin1 = cloneEnemy(goblinPrototype);
const goblin2 = cloneEnemy(goblinPrototype);
