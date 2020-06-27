import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import NearbyCard from "../nearby-card/nearby-card.jsx";

class NearbyList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
  }

  render() {
    const {offers, onChangeScreen} = this.props;

    return (
      <div className="near-places__list places__list">
        {offers.map((offer) => <NearbyCard key={offer.id} offer={offer} onChangeScreen={onChangeScreen} />)}
      </div>
    );
  }

  _onCardClick(id) {
    this.setState({activeCard: id});
  }
}

NearbyList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isBookmark: PropTypes.bool.isRequired,
      })
  ),
  onChangeScreen: PropTypes.func.isRequired,
};

export default NearbyList;
