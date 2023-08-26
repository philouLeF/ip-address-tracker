import * as L from "leaflet";

function initMap(): void {
  const map = L.map("map").setView([51.505, -0.09], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
}

document.addEventListener("DOMContentLoaded", (event) => {
  initMap();
});
