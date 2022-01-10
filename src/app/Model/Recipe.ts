export class Recipe{
    title: string;
    description: string;
    imageUrl: string;
    Ingredients: string[];
    constructor(title: string, description: string, imageUrl: string,ingredients:string[]) {
        this.title = title;
        this.description = description;
        this.Ingredients = ingredients;
        this.imageUrl = imageUrl;
    }
}