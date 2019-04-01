import axios from 'axios';
import Location from '../models/location';
import Station from '../models/station';

const baseURL = process.env.MVV_URL
const mvv_api_key = process.env.MVV_API_KEY

export const handle_errors = (error: any): Station[] => {
    console.error(`Oh no, something terrible happened: ${error}`);
    return []
}

const convert_get_nearby_response = (response: any) => {
    let stations: Array<Station> = response.data.locations.map((element: any) => {
        return new Station(element)
    });
    console.log(stations[0])
    return stations
}

export const get_stations = (location: Location): Promise<Station[]> => {

    return axios({
        method: 'get',
        url: `${baseURL}/location/nearby?latitude=${location.latitude}&longitude=${location.longitude}`,
        responseType: 'json',
        headers: {
            'Cache-Control': "no-cache",
            'x-mvg-authorization-key': mvv_api_key
        }
    }).then(convert_get_nearby_response)
        .catch(handle_errors);
}


export const get_departures = (): void => {
    console.log('this is under construction')
}

export default {}