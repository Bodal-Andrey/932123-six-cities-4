const offers = [
  {
    id: 1,
    city: `Amsterdam`,
    title: `Beautiful & luxurious apartment at great location`,
    coordinates: [52.3909553943508, 4.85309666406198],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 120,
    rating: 4.8,
    type: `apartment`,
    previewImage: `img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: false,
    bedrooms: 3,
    guests: 4,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    pictures: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    }
  },
  {
    id: 2,
    city: `Amsterdam`,
    title: `Wood and stone place`,
    coordinates: [52.369553943508, 4.85309666406198],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 80,
    rating: 4,
    type: `room`,
    previewImage: `img/room.jpg`,
    isPremium: false,
    isFavorite: true,
    bedrooms: 2,
    guests: 3,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`],
    pictures: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    }
  },
  {
    id: 3,
    city: `Amsterdam`,
    title: `Canal View Prinsengracht`,
    coordinates: [52.3909553943508, 4.929309666406198],
    description: ` A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    price: 132,
    rating: 4,
    type: `apartment`,
    previewImage: `img/apartment-02.jpg`,
    isPremium: false,
    isFavorite: false,
    bedrooms: 3,
    guests: 5,
    features: [`Wi-Fi`, `Towels`, `Heating`, `Coffee machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    pictures: [`img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    }
  }
];

const reviews = [
  {
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2018-05-10`,
    id: 1,
    rating: 3,
    user: {
      id: 1,
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      isPro: false
    }
  }
];

export default {offers, reviews};
