export class Account {
    name: string;
    address: string;
    company: string;
    locationAccuracy: boolean;
    imageUrl: string;
    latitude: number;
    longitude: number;

    // constructor(name: string, address: string, company: string, locationAccuracy: boolean, imageUrl: string, latitude: number, longitude: number)
    // {
    //     this.name = name;
    //     this.address = address;
    //     this.company = company;
    //     this.locationAccuracy = locationAccuracy;
    //     this.imageUrl = imageUrl;
    //     this.latitude = latitude;
    //     this.longitude = longitude;
    // }
    constructor(values: Object = {})
    {
        Object.assign(this, values);
    }
}