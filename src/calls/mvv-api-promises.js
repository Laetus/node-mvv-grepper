"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var station_1 = require("../models/station");
var baseURL = process.env.MVV_URL;
var mvv_api_key = process.env.MVV_API_KEY;
exports.handle_errors = function (error) {
    console.error("Oh no, something terrible happened: " + error);
};
exports.get_stations = function (location) {
    return axios_1["default"]({
        method: 'get',
        url: baseURL + "/location/nearby?latitude=" + location.latitude + "&longitude=" + location.longitude,
        responseType: 'json',
        headers: {
            'Cache-Control': "no-cache",
            'x-mvg-authorization-key': mvv_api_key
        }
    }).then(function (response) {
        var stations = [];
        stations = response.data.locations.map(function (element) {
            return new station_1["default"](element);
        });
        console.log(stations[0]);
        return stations;
    })["catch"](exports.handle_errors);
};
exports.get_departures = function () {
    console.log('this is under construction');
};
exports["default"] = {};
