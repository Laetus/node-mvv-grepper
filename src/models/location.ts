class Location {
    public latitude: number
    public longitude: number

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude
    }
    public toString = (): string => {
        return `Location: See https://www.google.de/maps/@${this.latitude},${this.longitude},13z`
    }
}



export default Location