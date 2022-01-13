export class Recipe{
    id:number
    title: string;
    description: string;
    imageUrl: string;
    ingredients: string[];
    constructor(id:number,title: string, description: string, imageUrl: string,ingredients:string[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.imageUrl = imageUrl;
    }
}