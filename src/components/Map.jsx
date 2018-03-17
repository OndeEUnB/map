import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    const { createMap } = this.props;
    createMap();
  }
  render() {
    return <div id="map" />;
  }
}

export default Map;
