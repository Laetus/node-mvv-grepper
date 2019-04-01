"use strict";
exports.__esModule = true;
var Location = /** @class */ (function () {
    function Location(latitude, longitude) {
        var _this = this;
        this.toString = function () {
            return "Location: See https://www.google.de/maps/@" + _this.latitude + "," + _this.longitude + ",13z";
        };
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return Location;
}());
exports["default"] = Location;
