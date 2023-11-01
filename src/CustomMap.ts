// import { User } from './User';
// import { Company } from './Company';

// instructions to every other class on how they can be an argument to 'addMarker
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    // just checks that we return a string, not that we return a specific string - that's on us
    markerContent(): string;
    color: string;
}

export class CustomMap {
    // private modifier means we can only reference this property inside this class
    private googleMap: google.maps.Map; 

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    // addMarker(mappable: User | Company): void {
    addMarker(mappable: Mappable): void { // this is the same as the above line BUT uses Mappable interface
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        // add a popup window with event listener
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                // make this content
                content: mappable.markerContent()
            });
            
            // show on the map where the marker is
            infoWindow.open(this.googleMap, marker);
        });
    }
}