const Months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

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

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const ratingTitle = {
  5: `perfect`,
  4: `good`,
  3: `not bad`,
  2: `badly`,
  1: `terribly`,
};

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer`,
};

const Error = {UNAUTHORIZED: 401};

const CardType = {
  MAIN: `MAIN`,
  PROPERTY: `PROPERTY`,
  FAVORITES: `FAVORITES`,
};

export {
  Months,
  SortingTypes,
  SortingTypeNames,
  AuthorizationStatus,
  ratingTitle,
  AppRoute,
  Error,
  CardType,
};
