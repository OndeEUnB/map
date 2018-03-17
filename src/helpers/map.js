import { MAP_ATTRIBUTION, MAP_OPTIONS, MAP_TILES } from '../constants/map';
import { map, tileLayer } from 'leaflet';

export const buildMap = () => {
  const tiles = tileLayer(MAP_TILES, MAP_ATTRIBUTION);
  const myMap = map('map', MAP_OPTIONS);
  tiles.addTo(myMap);
  return myMap;
};
