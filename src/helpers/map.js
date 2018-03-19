import mapboxgl from 'mapbox-gl';
import { TILES_TOKEN, MAP_OPTIONS } from '../constants/map';

export const buildMap = () => {
  mapboxgl.accessToken = TILES_TOKEN;
  return new mapboxgl.Map(MAP_OPTIONS);
};
