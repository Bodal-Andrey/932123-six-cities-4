import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

class CardsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};
  }

  render() {
    const {offers} = this.props;

    return (offers.map((offer) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <div className="cities__places-list places__list tabs__content">
          <Card key={offer.id} offer={offer} onCardNameClick={this._onCardNameClick} />
        </div>
      );
    }));
  }

  _onCardNameClick(offer) {
    this.setState({activeCard: offer});
  }
}

CardsList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired,
      })
  )
};

export default CardsList;
