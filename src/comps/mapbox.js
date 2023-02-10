import mapbox from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token/
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZmF6YWN6IiwiYSI6ImNsZHg4YnB4bTAwMmUzd283ZTQzczZxdGwifQ.cmROQ_S4_x9K1bS4g-0Mdw'
mapbox.accessToken = MAPBOX_ACCESS_TOKEN;

const key = {};

export { mapbox, key };