export class producto{
    id:number = 0;
    title:string = '';
    price:number=0;
    description:string='';
    category: {
        id:number;
        name:string;
        image:string;
    };
    images: string[] = [];

    constructor (data:any){
        this.category = data.category;
    }
}
