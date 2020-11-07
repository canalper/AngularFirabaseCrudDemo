export class Account {
    name: string;
    address: string;
    company: string;
    locationAccuracy: boolean;
    imageUrl: string;
    constructor(name: string, address: string, company: string, locationAccuracy: boolean, imageUrl: string)
    {
        this.name = name;
        this.address = address;
        this.company = company;
        this.locationAccuracy = locationAccuracy;
        this.imageUrl = imageUrl;
    }
}