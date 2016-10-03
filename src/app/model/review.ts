export class Review {
    author: string;
    title: string; 
    content: string;
    rating: number = 0;

    constructor(author:string){this.author = author;}
}