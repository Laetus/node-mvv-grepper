"use strict";
exports.__esModule = true;
var location_1 = require("./models/location");
var mvv_api_promises_1 = require("./calls/mvv-api-promises");
var loc = new location_1["default"](48.1579356, 11.5528053);
console.log(loc);
console.log("" + loc);
mvv_api_promises_1.get_stations(loc);
