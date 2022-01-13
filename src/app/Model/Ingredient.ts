export class Ingredient{
    Id: number;
    Name: string;
    Amount: number;
    constructor(id: number, name: string, Amount: number) {
        this.Id = id
        this.Name = name;
        this.Amount = Amount;
    }
}