import { Ingredient } from './Ingredient';
export class Recipe{
    id:number
    title: string;
    description: string;
    imageUrl: string;
    ingredients: Ingredient[];
    constructor(id:number,title: string, description: string, imageUrl: string,ingredients:Ingredient[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.imageUrl = imageUrl;
    }
}