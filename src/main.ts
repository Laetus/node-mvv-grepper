import Location from './models/location'
import Station from './models/station'
import { get_stations } from './calls/mvv-api-promises'
import { await_stations } from './calls/mvv-api-await-async'

const loc = new Location(48.1579356, 11.5528053)

console.log(loc)

console.log("" + loc)

// Using Promises
get_stations(loc);

// Using await/async
await_stations(loc)
    .then(
        (result: Array<Station>): void => {
            console.log(result)
        })
    .catch(
        (error: any): void => {
            console.error(error)
        })
