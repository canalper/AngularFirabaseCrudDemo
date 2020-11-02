export class Account {
    name: string;
    address: string;
    company: string;
    imageUrl: string;
    constructor(name: string, address: string, company: string, imageUrl: string)
    {
        this.name = name;
        this.address = address;
        this.company = company;
        this.imageUrl = imageUrl;
    }
}