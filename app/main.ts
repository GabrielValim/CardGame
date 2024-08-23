import Creature from "./models/Creature.js"
import Spell from "./models/Spell.js";

function main() {

    const goblin = new Creature('Goblin', 1, 2, 2);
    const dragon = new Creature('Dragão', 5, 7, 5);

    const fireball = new Spell('Bola de Fogo', 3, (target: Creature) => {
        console.log(`${target.getName()} sofre 4 de dano.`);
        target.receiveDamage(4)
        if (target.getDefense() <= 0) {
            console.log(`${target.getName()} foi destruído pela Bola de Fogo!`);
        } else {
            console.log(`${target.getName()} tem ${target.getDefense()} de defesa restante.`);
        }
    });

    goblin.attackCreature(dragon);  
    fireball.cast(goblin); 

    console.log('Fim do turno.');
}

main();