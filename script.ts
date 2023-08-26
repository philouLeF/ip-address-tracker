import * as L from "leaflet";
import axios from "axios";

interface IPInfo {
  ip: string;
  location: {
    lat: number;
    lng: number;
  };
}

let map: L.Map;
let marker: L.Marker;

function initMap(lat: number = 51.505, lng: number = -0.09): void {
  map = L.map("map").setView([lat, lng], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
}

async function fetchIPInfo(): Promise<void> {
  const apiKey = "at_FbBf4w6Dv8aXe0m1htLBONR8Ph71V";
  const response = await axios.get(
    `https://geo.ipify.org/api/v1?apiKey=${apiKey}`
  );
  const data: IPInfo = response.data;
  const { ip, location } = data;

  if (marker) {
    marker.setLatLng([location.lat, location.lng]);
  } else {
    marker = L.marker([location.lat, location.lng]).addTo(map);
  }

  map.setView([location.lat, location.lng], 13);
}

document.addEventListener("DOMContentLoaded", (event) => {
  initMap();
  fetchIPInfo();
});
