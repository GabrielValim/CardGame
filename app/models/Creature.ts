import Card from "./Card.js";

export default class Creature extends Card {
    private attack: number
    private defense: number

    constructor(name: string, cost: number, attack: number, defense: number) {
        super(name, cost);
        this.attack = attack;
        this.defense = defense
    }

    attackCreature(target: Creature): void {
        console.log(`${this.name} ataca ${target.name} causando ${this.attack} de dano`)
        target.defense -= this.attack
        if (target.defense <= 0) {
            console.log(`${target.name} foi destruido`)
        } else {
            console.log(`${target.name} tem ${target.defense} de defesa restante`);

        }
    }

    receiveDamage(damage: number): void {
        this.defense -= damage;
    }
    
    getName(): string {
        return this.name
    }

    getDefense(): number {
        return this.defense
    }
}