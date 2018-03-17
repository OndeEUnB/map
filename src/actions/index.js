export const createMap = () => ({
  type: 'CREATE_MAP'
});

export const mapCreated = (map) => ({
  type: 'MAP_CREATED',
  map
})

export const createMapFailed = (error) => ({
  type: 'CREATE_MAP_FAILED',
  error
});
