export class Recipe{
    title: string;
    description: string;
    imageUrl: string;
    ingredients: string[];
    constructor(title: string, description: string, imageUrl: string,ingredients:string[]) {
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.imageUrl = imageUrl;
    }
}