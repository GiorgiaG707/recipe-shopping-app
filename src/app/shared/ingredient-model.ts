export class Ingredient{
    public name: string;
    public amount: number;

    constructor(name:string, amount: number){
        this.name = name;
        this.amount = amount;
    }
}


/*
Si può fare anche così

    constructor(public name:string, public amount: number){
        
    }


*/ 