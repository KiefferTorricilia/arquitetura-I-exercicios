export class User {
    constructor(
        private id: string,
        private name: string,
        private age: number
    ){}

    public getId(): string {
        return this.id
    }
    
    public setId(value: string): void {
        this.id = value
    }

    public getName(): string {
        return this.name
    }

    public setName(value: string): void {
        this.name = value
    }

    public getAge(): number {
        return this.age
    }
    public setAge(value: number): void {
        this.age = value
    }
}