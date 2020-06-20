export class Product {

    id: number;
    name: string;
    price :number;
    discount :number;
    description: string;
    imageUrl: string;

    constructor(id, name, price, discount,description,imageUrl)
    {
        this.id=id
        this.name=name
        this.price=price
        this.discount=discount
        this.description=description
        this.imageUrl =imageUrl
    }
}
