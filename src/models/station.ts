import Vehicle from './vehicle'
import Location from './location'


class Station {
    public id: number
    public place: string
    public name: string
    public distance: number
    public products: Array<Vehicle>
    public location: Location

    constructor(obj: any) {
        this.id = obj.id;
        this.location = new Location(obj.latitude, obj.longitude);
        this.name = obj.name;
        this.place = obj.place;
        this.distance = obj.distance
        this.products = obj.products
    }
    public toString = (): string => {
        return `Station '${this.name}' ${this.distance}m away.`
    }
}


export default Station