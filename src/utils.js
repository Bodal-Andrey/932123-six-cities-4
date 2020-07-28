import {SortingTypes, Months} from "./const.js";

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const sortingOffers = (offers, sortType) => {
  let sortedOffers = [];

  switch (sortType) {
    case SortingTypes.POPULAR:
      sortedOffers = offers;
      break;
    case SortingTypes.PRICE_LOW_TO_HIGH:
      sortedOffers = offers.slice().sort((a, b) => a.price - b.price);
      break;
    case SortingTypes.PRICE_HIGH_TO_LOW:
      sortedOffers = offers.slice().sort((a, b) => b.price - a.price);
      break;
    case SortingTypes.TOP_RATED_FIRST:
      sortedOffers = offers.slice().sort((a, b) => b.rating - a.rating);
      break;
  }

  return sortedOffers;
};

const firstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getReviewDate = (date) => {
  return `${Months[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;
};

export {extend, sortingOffers, firstLetter, getReviewDate};
