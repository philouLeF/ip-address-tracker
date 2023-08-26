"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var L = require("leaflet");
function initMap() {
    var map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
}
document.addEventListener("DOMContentLoaded", function (event) {
    initMap();
});
