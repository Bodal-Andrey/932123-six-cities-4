import {SortingTypes} from "./const.js";

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

const parseOffer = (data) => {
  let offer = {};
  offer.id = data[`id`];
  offer.city = data[`city`][`name`];
  offer.title = data[`title`];
  offer.coordinates = [];
  offer.coordinates[0] = data[`location`][`latitude`];
  offer.coordinates[1] = data[`location`][`longitude`];
  offer.zoom = data[`location`][`zoom`];
  offer.description = data[`description`];
  offer.price = data[`price`];
  offer.rating = data[`rating`];
  offer.type = data[`type`];
  offer.previewImage = data[`preview_image`];
  offer.isPremium = data[`is_premium`];
  offer.Favorite = data[`is_favorite`];
  offer.bedrooms = data[`bedrooms`];
  offer.guests = data[`max_adults`];
  offer.features = data[`goods`];
  offer.pictures = data[`images`];
  offer.host = {};
  offer.host.avatarUrl = data[`host`][`avatar_url`];
  offer.host.isPro = data[`host`][`is_pro`];
  offer.host.name = data[`host`][`name`];
  offer.host.id = data[`host`][`id`];
  offer.location = data[`location`];

  return offer;
};

const parseReview = (data) => {
  let review = {};
  review.description = data[`comment`];
  review.date = data[`date`];
  review.id = data[`id`];
  review.rating = data[`rating`];
  review.user = {};
  review.user.avatar = data[`user`][`avatar_url`];
  review.user.id = data[`user`][`id`];
  review.user.isPro = data[`user`][`is_pro`];
  review.user.name = data[`user`][`name`];

  return review;
};

export {extend, sortingOffers, firstLetter, parseOffer, parseReview};
