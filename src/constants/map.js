export const MAP_CENTER = [-47.87189483642578, -15.758140620981214];
export const MAP_SOUTHWEST = [-47.93429374694824, -15.826278199357942];
export const MAP_NORTHEAST = [-47.76615142822265, -15.682212561298117];
export const MAP_BOUNDS = [MAP_SOUTHWEST, MAP_NORTHEAST];

export const TILES_TOKEN = 'pk.eyJ1Ijoia2Fpcm9udnoiLCJhIjoiY2o0Y3h5YmJhMGU1MzJxbXh2dmczN2w0eSJ9.iOK4aTg-UWinlS0prZPDnA';

const MAPBOX_COPYRIGHT = '&copy; <a href="https://www.mapbox.com/map-feedback/">Mapbox</a>';
const OSM_COPYRIGHT = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
export const MAP_ATTRIBUTION = `${MAPBOX_COPYRIGHT} ${OSM_COPYRIGHT}`;

const MAP_STYLES = 'mapbox://styles/kaironvz/cj4cxz9nr5n1u2rp53imvn9tu';

export const MAP_OPTIONS = {
  maxBounds: MAP_BOUNDS,
  container: 'map',
  style: MAP_STYLES,
  center: MAP_CENTER,
  zoom: 9
}
