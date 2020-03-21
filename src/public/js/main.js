const map = L.map('map-template').setView([37.257714,-5.551645], 13);

const tileURL = 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';

L.tileLayer(tileURL).addTo(map);
// Cuando un usuario se conecte queremos conocer su localización
map.locate({enableHighAccuracy: true});

const marker = L.marker([37.257714,-5.551645]).bindPopup('Usted se encuentra aquí.');
marker.addTo(map);