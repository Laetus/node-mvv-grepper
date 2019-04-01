"use strict";
exports.__esModule = true;
var location_1 = require("./location");
var Station = /** @class */ (function () {
    function Station(obj) {
        this.id = obj.id;
        this.location = new location_1["default"](obj.latitude, obj.longitude);
        this.name = obj.name;
        this.place = obj.place;
        this.distance = obj.distance;
        this.products = obj.products;
    }
    return Station;
}());
exports["default"] = Station;
