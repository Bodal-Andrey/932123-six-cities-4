import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
    this.markersLayer = null;
    this.map = null;
  }

  componentDidMount() {
    const {city, zoom} = this.props;
    const currentMap = this.mapRef.current;

    this.map = leaflet.map(currentMap, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
    .addTo(this.map);

    this.markersLayer = leaflet.layerGroup().addTo(this.map);
    this.renderMarkers();
  }

  componentDidUpdate() {
    const {city, zoom} = this.props;
    this.markersLayer.clearLayers();
    this.map.setView(city, zoom);
    this.renderMarkers();
  }

  componentWillUnmount() {
    const currentMap = this.mapRef.current;
    currentMap.remove();
  }

  renderMarkers() {
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
        .addTo(this.markersLayer);
      } else {
        leaflet
        .marker(item.location.coordinates, {icon})
        .addTo(this.markersLayer);
      }
    });
  }

  render() {
    const {className} = this.props;
    return <section ref={this.mapRef} className={className}></section>;
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
