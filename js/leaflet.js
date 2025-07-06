let container = document.querySelector("[data-map]");

if (container) {
  let map = L.map(container, {
    scrollWheelZoom: false,
  }).setView([47.6381, 7.66781], 14);

  L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}", {
    minZoom: 0,
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: "png",
  }).addTo(map);

  L.marker([47.6381, 7.66781]).addTo(map);
}
