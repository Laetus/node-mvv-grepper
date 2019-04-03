import axios from 'axios';
import Location from '../models/location';
import Station from '../models/station';

const baseURL = process.env.MVV_URL
const mvv_api_key = process.env.MVV_API_KEY


const get_from_api = (location: Location): Promise<any> => {
    return axios({
        method: 'get',
        url: `${baseURL}/location/nearby`,
        responseType: 'json',
        headers: {
            'Cache-Control': "no-cache",
            'x-mvg-authorization-key': mvv_api_key
        },
        params: {
            latitude: location.latitude,
            longitude: location.longitude
        }
    })
};

const convert_raw_stations = async (response: any): Promise<Array<Station>> => {
    let stations: Array<Station> = response.data.locations.map((element: any) => {
        return new Station(element)
    })
    return stations
}

export const await_stations = async (location: Location): Promise<Array<Station>> => {
    const stations_raw = await get_from_api(location)
    const stations = await convert_raw_stations(stations_raw)

    return stations
}
