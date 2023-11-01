/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// these still work after introducing the Mappable interface because both User and Company have a location property (so they satisfy the Mappable interface)
customMap.addMarker(user);
customMap.addMarker(company);

