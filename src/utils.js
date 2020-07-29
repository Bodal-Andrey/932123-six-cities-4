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

const parseOffer = (data) => {
  return {
    id: data[`id`],
    city: data[`city`][`name`],
    title: data[`title`],
    coords: [data[`location`][`latitude`], data[`location`][`longitude`]],
    zoom: data[`location`][`zoom`],
    description: data[`description`],
    price: data[`price`],
    rating: data[`rating`],
    type: data[`type`],
    previewImage: data[`preview_image`],
    isPremium: data[`is_premium`],
    isFavorite: data[`is_favorite`],
    bedrooms: data[`bedrooms`],
    guests: data[`max_adults`],
    features: data[`goods`],
    pictures: data[`images`],
    host: {
      avatarUrl: data[`host`][`avatar_url`],
      isPro: data[`host`][`is_pro`],
      name: data[`host`][`name`],
      id: data[`host`][`id`]
    },
    location: data[`location`]
  };
};

export {extend, sortingOffers, firstLetter, getReviewDate, parseOffer};
