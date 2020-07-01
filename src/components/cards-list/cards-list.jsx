import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

class CardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
  }

  render() {
    const {offers, onChangeScreen, cardsClass} = this.props;

    return (
      <div className={cardsClass === `cities` ? `cities__places-list places__list tabs__content` : `near-places__list places__list`}>
        {offers.map((offer) => <Card key={offer.id} offer={offer} onChangeScreen={onChangeScreen} cardsClass={cardsClass} />)}
      </div>
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
  cardsClass: PropTypes.string.isRequired,
};

export default CardsList;
