import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
    this._markersLayer = null;
    this._map = null;
  }

  componentDidMount() {
    const {city, zoom} = this.props;
    const currentMap = this._mapRef.current;

    this._map = leaflet.map(currentMap, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
    .addTo(this._map);

    this._markersLayer = leaflet.layerGroup().addTo(this._map);
    this._renderMarkers();
  }

  componentDidUpdate() {
    const {city, zoom} = this.props;
    this._markersLayer.clearLayers();
    this._map.setView(city, zoom);
    this._renderMarkers();
  }

  componentWillUnmount() {
    const currentMap = this._mapRef.current;
    currentMap.remove();
  }

  _renderMarkers() {
    const {activeOfferId, offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    offers.forEach((item) => {
      if (item.id === activeOfferId) {
        leaflet
        .marker(item.location.coordinates, {activeIcon})
        .addTo(this._markersLayer);
      } else {
        leaflet
        .marker(item.location.coordinates, {icon})
        .addTo(this._markersLayer);
      }
    });
  }

  render() {
    const {className} = this.props;
    return <section ref={this._mapRef} className={className}></section>;
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.array.isRequired,
  activeOfferId: PropTypes.any,
  className: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Map;
