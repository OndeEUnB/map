import {latLngBounds} from 'leaflet';

export const MAP_CENTER = [-15.758140620981214, -47.87189483642578];
export const MAP_SOUTHWEST = [-15.826278199357942, -47.93429374694824];
export const MAP_NORTHEAST = [-15.682212561298117, -47.76615142822265];
export const MAP_BOUNDS = latLngBounds(MAP_SOUTHWEST, MAP_NORTHEAST);

const TILES_TOKEN = 'pk.eyJ1Ijoia2Fpcm9udnoiLCJhIjoiY2o0Y3h5YmJhMGU1MzJxbXh2dmczN2w0eSJ9.iOK4aTg-UWinlS0prZPDnA';
const TILES_ENDPOINT = 'https://api.mapbox.com/styles/v1/kaironvz/cj4cxz9nr5n1u2rp53imvn9tu/tiles/256/';
export const MAP_TILES = `${TILES_ENDPOINT}{z}/{x}/{y}?access_token=${TILES_TOKEN}`;

const MAPBOX_COPYRIGHT = '&copy; <a href="https://www.mapbox.com/map-feedback/">Mapbox</a>';
const OSM_COPYRIGHT = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
export const MAP_ATTRIBUTION = `${MAPBOX_COPYRIGHT} ${OSM_COPYRIGHT}`;

export const MAP_OPTIONS = {
  maxBounds: MAP_BOUNDS,
  center: MAP_CENTER,
  zoom: 13.5,
  minZoom: 13.5,
  trackResize: true
};
