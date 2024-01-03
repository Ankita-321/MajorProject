mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  center: listing.geometry.coordinates,
  zoom: 10,
});



// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) 
  .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h4>${listing.location}</h4><p>Exact location provided after booking!</p>`))
  .addTo(map);
