import { Ingredinet } from './../shared/ingredient.model';
// export class Recipe{
//     public name:string;
//     public description:string;
//     public imagePath:string;

//     constructor(name:string , description:string  , imagePath:string){
//         this.name = name;
//         this.description = description,
//         this.imagePath = imagePath;
//     }
// }

export interface Recipe{
    name:string,
    description:string,
    imagePath:string,
    ingredients:Ingredinet[]
}