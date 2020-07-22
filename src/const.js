const Months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const CardsClass = {
  CITIES: `cities`,
  NEAR_PLACES: `near-places`
};

const SortingTypes = {
  POPULAR: `popular`,
  PRICE_LOW_TO_HIGH: `priceLowToHigh`,
  PRICE_HIGH_TO_LOW: `priceHigToLow`,
  TOP_RATED_FIRST: `topRatedFirst`
};

const SortingTypeNames = {
  [SortingTypes.POPULAR]: `Popular`,
  [SortingTypes.PRICE_LOW_TO_HIGH]: `Price: low to high`,
  [SortingTypes.PRICE_HIGH_TO_LOW]: `Price: high to low`,
  [SortingTypes.TOP_RATED_FIRST]: `Top rated first`,
};

export {Months, CardsClass, SortingTypes, SortingTypeNames};
