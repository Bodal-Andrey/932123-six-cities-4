const TYPES = {
  apartment: `apartment`,
  hotel: `hotel`,
  house: `house`,
  room: `room`,
};

export default [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      coordinates: [52.3740300, 4.8896900],
      zoom: 12,
    },
    title: `Beautiful & luxurious apartment at great location`,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    type: TYPES.apartment,
    rating: 4,
    isPremium: true,
    isFavorite: false,
    pictures: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    feature: `3 Bedrooms`,
    guests: 4,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    nearby: [
      {
        id: 5,
        city: `Amsterdam`,
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.3909553943508, 4.85309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 6,
        city: `Amsterdam`,
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.room,
        rating: 4,
        isPremium: false,
        isFavorite: true,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.369553943508, 4.85309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 7,
        city: `Amsterdam`,
        title: `Canal View Prinsengracht`,
        photo: `img/apartment-02.jpg`,
        price: 132,
        type: TYPES.apartment,
        rating: 3,
        isPremium: false,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.3909553943508, 4.929309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
    ],
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      coordinates: [52.3740300, 4.8896900]
    },
    title: `Wood and stone place`,
    photo: `img/room.jpg`,
    price: 80,
    type: TYPES.room,
    rating: 4,
    isPremium: false,
    isFavorite: true,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    feature: `3 Bedrooms`,
    guests: `Max 4 adults`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isStar: true,
    },
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        name: `Max`,
        date: `December 24, 2018`
      },
      {
        description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        rating: 4,
        name: `James`,
        date: `October 20, 2018`
      },
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 5,
        name: `Ron`,
        date: `July 14, 2018`
      },
    ],
    nearby: [
      {
        id: 5,
        city: `Amsterdam`,
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.3909553943508, 4.85309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 6,
        city: `Amsterdam`,
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.room,
        rating: 4,
        isPremium: false,
        isFavorite: true,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.369553943508, 4.85309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 7,
        city: `Amsterdam`,
        title: `Canal View Prinsengracht`,
        photo: `img/apartment-02.jpg`,
        price: 132,
        type: TYPES.apartment,
        rating: 3,
        isPremium: false,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.3909553943508, 4.929309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
    ],
  },
  {
    id: 3,
    city: {
      name: `Amsterdam`,
      coordinates: [52.3740300, 4.8896900]
    },
    title: `Canal View Prinsengracht`,
    photo: `img/apartment-02.jpg`,
    price: 132,
    type: TYPES.apartment,
    rating: 3,
    isPremium: false,
    isFavorite: false,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    feature: `3 Bedrooms`,
    guests: `Max 4 adults`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isStar: true,
    },
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        name: `Max`,
        date: `December 24, 2018`
      },
      {
        description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        rating: 4,
        name: `James`,
        date: `October 20, 2018`
      },
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 5,
        name: `Ron`,
        date: `July 14, 2018`
      },
    ],
    nearby: [
      {
        id: 5,
        city: `Amsterdam`,
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.3909553943508, 4.85309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 6,
        city: `Amsterdam`,
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.room,
        rating: 4,
        isPremium: false,
        isFavorite: true,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.369553943508, 4.85309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 7,
        city: `Amsterdam`,
        title: `Canal View Prinsengracht`,
        photo: `img/apartment-02.jpg`,
        price: 132,
        type: TYPES.apartment,
        rating: 3,
        isPremium: false,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.3909553943508, 4.929309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
    ],
  },
  {
    id: 4,
    city: {
      name: `Amsterdam`,
      coordinates: [52.3740300, 4.8896900]
    },
    title: `Nice, cozy, warm big bed apartment`,
    photo: `img/apartment-03.jpg`,
    price: 180,
    type: TYPES.apartment,
    rating: 5,
    isPremium: true,
    isFavorite: false,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    feature: `3 Bedrooms`,
    guests: `Max 4 adults`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isStar: true,
    },
    coordinates: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        name: `Max`,
        date: `December 24, 2018`
      },
      {
        description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        rating: 4,
        name: `James`,
        date: `October 20, 2018`
      },
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 5,
        name: `Ron`,
        date: `July 14, 2018`
      },
    ],
    nearby: [
      {
        id: 5,
        city: `Amsterdam`,
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.3909553943508, 4.85309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 6,
        city: `Amsterdam`,
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.room,
        rating: 4,
        isPremium: false,
        isFavorite: true,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.369553943508, 4.85309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 7,
        city: `Amsterdam`,
        title: `Canal View Prinsengracht`,
        photo: `img/apartment-02.jpg`,
        price: 132,
        type: TYPES.apartment,
        rating: 3,
        isPremium: false,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [52.3909553943508, 4.929309666406198],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
    ],
  },
  {
    id: 5,
    city: {
      name: `Paris`,
      coordinates: [48.8534100, 2.3488000]
    },
    title: `Nice, cozy, warm big bed apartment`,
    photo: `img/apartment-03.jpg`,
    price: 180,
    type: TYPES.apartment,
    rating: 5,
    isPremium: true,
    isFavorite: false,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    feature: `3 Bedrooms`,
    guests: `Max 4 adults`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isStar: true,
    },
    coordinates: [48.8674100, 2.3258000],
    reviews: [
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        name: `Max`,
        date: `December 24, 2018`
      },
      {
        description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        rating: 4,
        name: `James`,
        date: `October 20, 2018`
      },
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 5,
        name: `Ron`,
        date: `July 14, 2018`
      },
    ],
    nearby: [
      {
        id: 8,
        city: {
          name: `Paris`,
          coordinates: [48.8534100, 2.3488000]
        },
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [48.8564100, 2.3490000],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 9,
        city: {
          name: `Paris`,
          coordinates: [48.8534100, 2.3488000]
        },
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.room,
        rating: 4,
        isPremium: false,
        isFavorite: true,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [48.8954100, 2.3288000],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 10,
        city: {
          name: `Paris`,
          coordinates: [48.8534100, 2.3488000]
        },
        title: `Canal View Prinsengracht`,
        photo: `img/apartment-02.jpg`,
        price: 132,
        type: TYPES.apartment,
        rating: 3,
        isPremium: false,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [48.8124100, 2.3542000],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
    ],
  },
  {
    id: 6,
    city: {
      name: `Brussels`,
      coordinates: [50.8504500, 4.3487800]
    },
    title: `Beautiful & luxurious apartment at great location`,
    photo: `img/apartment-01.jpg`,
    price: 120,
    type: TYPES.apartment,
    rating: 4,
    isPremium: true,
    isFavorite: false,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    feature: `3 Bedrooms`,
    guests: `Max 4 adults`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isStar: true,
    },
    coordinates: [50.8704500, 4.3637800],
    reviews: [
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        name: `Max`,
        date: `December 24, 2018`
      },
      {
        description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        rating: 4,
        name: `James`,
        date: `October 20, 2018`
      },
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 5,
        name: `Ron`,
        date: `July 14, 2018`
      },
    ],
    nearby: [
      {
        id: 8,
        city: {
          name: `Brussels`,
          coordinates: [50.8504500, 4.3487800]
        },
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [50.8244500, 4.3211800],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 9,
        city: {
          name: `Brussels`,
          coordinates: [50.8504500, 4.3487800]
        },
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.room,
        rating: 4,
        isPremium: false,
        isFavorite: true,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [50.8364500, 4.3111800],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 10,
        city: {
          name: `Brussels`,
          coordinates: [50.8504500, 4.3487800]
        },
        title: `Canal View Prinsengracht`,
        photo: `img/apartment-02.jpg`,
        price: 132,
        type: TYPES.apartment,
        rating: 3,
        isPremium: false,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [50.8145500, 4.3412800],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
    ],
  },
  {
    id: 7,
    city: {
      name: `Hamburg`,
      coordinates: [53.5753200, 10.0153400]
    },
    title: `Canal View Prinsengracht`,
    photo: `img/apartment-02.jpg`,
    price: 132,
    type: TYPES.apartment,
    rating: 3,
    isPremium: false,
    isFavorite: false,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    ],
    feature: `3 Bedrooms`,
    guests: `Max 4 adults`,
    inside: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isStar: true,
    },
    coordinates: [53.5333200, 10.0283400],
    reviews: [
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 3,
        name: `Max`,
        date: `December 24, 2018`
      },
      {
        description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        rating: 4,
        name: `James`,
        date: `October 20, 2018`
      },
      {
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 5,
        name: `Ron`,
        date: `July 14, 2018`
      },
    ],
    nearby: [
      {
        id: 8,
        city: {
          name: `Hamburg`,
          coordinates: [53.5753200, 10.0153400]
        },
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [53.5963200, 10.0173200],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 9,
        city: {
          name: `Hamburg`,
          coordinates: [53.5753200, 10.0153400]
        },
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.room,
        rating: 4,
        isPremium: false,
        isFavorite: true,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [53.5113200, 10.0993400],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
      {
        id: 10,
        city: {
          name: `Hamburg`,
          coordinates: [53.5753200, 10.0153400]
        },
        title: `Canal View Prinsengracht`,
        photo: `img/apartment-02.jpg`,
        price: 132,
        type: TYPES.apartment,
        rating: 3,
        isPremium: false,
        isFavorite: false,
        images: [
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-01.jpg`,
        ],
        description: [
          `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        ],
        feature: `3 Bedrooms`,
        guests: `Max 4 adults`,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`,
        ],
        owner: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        coordinates: [53.5333200, 10.0999400],
        reviews: [
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 3,
            name: `Max`,
            date: `December 24, 2018`
          },
          {
            description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
            rating: 4,
            name: `James`,
            date: `October 20, 2018`
          },
          {
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            rating: 5,
            name: `Ron`,
            date: `July 14, 2018`
          },
        ],
      },
    ],
  },
];
