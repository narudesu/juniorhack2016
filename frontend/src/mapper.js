import L from 'leaflet'

const mymap = L.map('mainmap').setView([51.505, -0.09], 13)



const osm_url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
L.tileLayer(osm_url, {
  minZoom: 8,
  maxZoom: 12,
  attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap)


const marker = L.marker([51.505, -0.09]).addTo(mymap)
