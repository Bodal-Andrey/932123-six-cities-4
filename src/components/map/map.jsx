import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const {offers, city, offerId} = this.props;
    const currentMap = this._mapRef.current;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(currentMap, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
    .addTo(map);

    offers.forEach((item) => {
      if (item.id === offerId) {
        leaflet
        .marker(item.coordinates, {activeIcon})
        .addTo(map);
      } else {
        leaflet
        .marker(item.coordinates, {icon})
        .addTo(map);
      }
    });
  }

  componentWillUnmount() {
    const currentMap = this._mapRef.current;
    currentMap.remove();
  }

  render() {
    const {className} = this.props;
    return <section ref={this._mapRef} className={className}></section>;
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.array.isRequired,
  offerId: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Map;
