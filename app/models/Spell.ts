import Card from "./Card.js";
import Creature from "./Creature.js";

export default class Spell extends Card {
    private effect: (target: Creature) => void;

    constructor(name: string, manaCost: number, effect: (target: Creature) => void) {
        super(name, manaCost);
        this.effect = effect;
    }

    cast(target: Creature): void {
        console.log(`${this.name} foi conjurada em ${target.getName()}.`);
        this.effect(target);
    }
}