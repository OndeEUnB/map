export default function map(state = {}, action) {
  switch(action.type) {
    case 'MAP_CREATED':
      return action.map;
    default:
      return state;
  }
}
