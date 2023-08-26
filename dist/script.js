"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const L = require("leaflet");
const axios_1 = require("axios");
let map;
let marker;
function fetchIPInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = "at_FbBf4w6Dv8aXe0m1htLBONR8Ph71V";
        const response = yield axios_1.default.get(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`);
        const data = response.data;
        const { ip, location } = data;
        console.log(response);
        if (marker) {
            marker.setLatLng([location.lat, location.lng]);
        }
        else {
            marker = L.marker([location.lat, location.lng]).addTo(map);
        }
    });
}
function initMap() {
    map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
}
document.addEventListener("DOMContentLoaded", (event) => {
    initMap();
    fetchIPInfo();
});
