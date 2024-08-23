export default class Card {
    protected name: string
    protected manaCost: number
    constructor(name: string , manaCost: number) {
        this.name = name
        this.manaCost = manaCost
    }

    tostring() {
        return`${this.name} (Custo: ${this.manaCost})`
    }

     play(): void {
        console.log(`${this.name} foi jogada.`);
    }

    public getName(): string {
        return this.name;
    }
}