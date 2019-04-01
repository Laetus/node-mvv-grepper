import Location from './models/location'
import { get_stations } from './calls/mvv-api-promises'


const loc = new Location(48.1579356, 11.5528053)

console.log(loc)

console.log("" + loc)

get_stations(loc);

