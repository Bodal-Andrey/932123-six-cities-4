const TYPES = {
  apartment: `Apartment`,
  hotel: `Hotel`,
  house: `House`,
  privateRoom: `Private room`,
};

export default [
  {
    id: 1,
    city: `Amsterdam`,
    title: `Beautiful & luxurious apartment at great location`,
    photo: `img/apartment-01.jpg`,
    price: 120,
    type: TYPES.apartment,
    rating: 4,
    isPremium: true,
    isBookmark: false,
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
    additional: [
      {
        id: 5,
        city: `Amsterdam`,
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isBookmark: false,
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
        type: TYPES.privateRoom,
        rating: 4,
        isPremium: false,
        isBookmark: true,
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
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.privateRoom,
        rating: 4,
        isPremium: false,
        isBookmark: true,
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
    ]
  },
  {
    id: 2,
    city: `Amsterdam`,
    title: `Wood and stone place`,
    photo: `img/room.jpg`,
    price: 80,
    type: TYPES.privateRoom,
    rating: 4,
    isPremium: false,
    isBookmark: true,
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
    additional: [
      {
        id: 5,
        city: `Amsterdam`,
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isBookmark: false,
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
        type: TYPES.privateRoom,
        rating: 4,
        isPremium: false,
        isBookmark: true,
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
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.privateRoom,
        rating: 4,
        isPremium: false,
        isBookmark: true,
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
    ]
  },
  {
    id: 3,
    city: `Amsterdam`,
    title: `Canal View Prinsengracht`,
    photo: `img/apartment-02.jpg`,
    price: 132,
    type: TYPES.apartment,
    rating: 3,
    isPremium: false,
    isBookmark: false,
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
    additional: [
      {
        id: 5,
        city: `Amsterdam`,
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isBookmark: false,
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
        type: TYPES.privateRoom,
        rating: 4,
        isPremium: false,
        isBookmark: true,
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
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.privateRoom,
        rating: 4,
        isPremium: false,
        isBookmark: true,
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
    ]
  },
  {
    id: 4,
    city: `Amsterdam`,
    title: `Nice, cozy, warm big bed apartment`,
    photo: `img/apartment-03.jpg`,
    price: 180,
    type: TYPES.apartment,
    rating: 5,
    isPremium: true,
    isBookmark: false,
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
    additional: [
      {
        id: 5,
        city: `Amsterdam`,
        title: `Beautiful & luxurious apartment at great location`,
        photo: `img/apartment-01.jpg`,
        price: 120,
        type: TYPES.apartment,
        rating: 4,
        isPremium: true,
        isBookmark: false,
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
        type: TYPES.privateRoom,
        rating: 4,
        isPremium: false,
        isBookmark: true,
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
        title: `Wood and stone place`,
        photo: `img/room.jpg`,
        price: 80,
        type: TYPES.privateRoom,
        rating: 4,
        isPremium: false,
        isBookmark: true,
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
    ]
  },
];
