// capitalize name of file since primarily exporting a class

import { Mappable } from "./CustomMap";

import { faker } from "@faker-js/faker";

// an instance of class user satisfies all the properties of the Mappable interface
// that way errors appear here in this file, where we actually need to make a change, not in index.ts
export class User implements Mappable {
    name: string
    location: {
        lat: number,
        lng: number
    };
    color: string = 'red';
    
    // initialize User inside a constructor function
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    };

    markerContent(): string {
        return `User Name: ${this.name}`
    };
}
