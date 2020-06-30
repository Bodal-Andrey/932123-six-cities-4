import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

class CardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
  }

  render() {
    const {offers, onChangeScreen, isNearby = false} = this.props;

    return (
      offers.map((offer) => <Card key={offer.id} offer={offer} onChangeScreen={onChangeScreen} isNearby={isNearby} />)
    );
  }

  _onCardClick(id) {
    this.setState({activeCard: id});
  }
}

CardsList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired,
      })
  ),
  onChangeScreen: PropTypes.func.isRequired,
  isNearby: PropTypes.bool,
};

export default CardsList;
