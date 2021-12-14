export class Recipe{
    public name: string;
    public description: string;
    public picturePath: string;

    constructor(name:string, description:string, picturePath:string){
        this.name = name;
        this.description = description;
        this.picturePath = picturePath;
    }
}