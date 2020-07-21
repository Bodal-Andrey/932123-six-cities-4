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
      coordinates: [52.38333, 4.9],
      zoom: 12
    },
    title: `Beautiful & luxurious apartment at great location`,
    previewImage: `img/apartment-01.jpg`,
    pictures: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 120,
    type: TYPES.apartment,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    bedrooms: 2,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    guests: 3,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 1,
      isPro: false,
      name: `Max`
    },
    location: {
      coordinates: [52.3909553943508, 4.85309666406198],
      zoom: 10,
    },
  },
  {
    id: 5,
    city: {
      name: `Paris`,
      coordinates: [48.855931, 2.350962],
      zoom: 12
    },
    title: `Not bad!`,
    previewImage: `img/apartment-03.jpg`,
    pictures: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    price: 999,
    type: TYPES.hotel,
    rating: 3.2,
    isPremium: false,
    isFavorite: false,
    bedrooms: 1,
    description: `An independent House.`,
    guests: 1,
    features: [`Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 4,
      isPro: true,
      name: `Angelina`
    },
    location: {
      coordinates: [48.854082, 2.350379],
      zoom: 14,
    },
  }
];

// export default [
//   {
//     id: 1,
//     city: {
//       name: `Amsterdam`,
//       coordinates: [52.3740300, 4.8896900],
//       zoom: 12,
//     },
//     title: `Beautiful & luxurious apartment at great location`,
//     previewImage: `img/apartment-01.jpg`,
//     price: 120,
//     type: TYPES.apartment,
//     rating: 4,
//     isPremium: true,
//     isFavorite: false,
//     pictures: [
//       `img/room.jpg`,
//       `img/apartment-01.jpg`,
//       `img/apartment-02.jpg`,
//       `img/apartment-03.jpg`,
//       `img/studio-01.jpg`,
//       `img/apartment-01.jpg`,
//     ],
//     description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
//                   An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
//     feature: `3 Bedrooms`,
//     guests: 4,
//     features: [
//       `Wi-Fi`,
//       `Washing machine`,
//       `Towels`,
//       `Heating`,
//       `Coffee machine`,
//       `Baby seat`,
//       `Kitchen`,
//       `Dishwasher`,
//       `Cabel TV`,
//       `Fridge`,
//     ],
//     nearby: [
//       {
//         id: 5,
//         city: `Amsterdam`,
//         title: `Beautiful & luxurious apartment at great location`,
//         photo: `img/apartment-01.jpg`,
//         price: 120,
//         type: TYPES.apartment,
//         rating: 4,
//         isPremium: true,
//         isFavorite: false,
//         images: [
//           `img/room.jpg`,
//           `img/apartment-01.jpg`,
//           `img/apartment-02.jpg`,
//           `img/apartment-03.jpg`,
//           `img/studio-01.jpg`,
//           `img/apartment-01.jpg`,
//         ],
//         description: [
//           `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//           `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
//         ],
//         feature: `3 Bedrooms`,
//         guests: `Max 4 adults`,
//         inside: [
//           `Wi-Fi`,
//           `Washing machine`,
//           `Towels`,
//           `Heating`,
//           `Coffee machine`,
//           `Baby seat`,
//           `Kitchen`,
//           `Dishwasher`,
//           `Cabel TV`,
//           `Fridge`,
//         ],
//         owner: {
//           avatar: `img/avatar-angelina.jpg`,
//           name: `Angelina`,
//           isStar: true,
//         },
//         coordinates: [52.3909553943508, 4.85309666406198],
//         reviews: [
//           {
//             description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//             rating: 3,
//             name: `Max`,
//             date: `December 24, 2018`
//           },
//           {
//             description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
//             rating: 4,
//             name: `James`,
//             date: `October 20, 2018`
//           },
//           {
//             description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//             rating: 5,
//             name: `Ron`,
//             date: `July 14, 2018`
//           },
//         ],
//       },
//       {
//         id: 6,
//         city: `Amsterdam`,
//         title: `Wood and stone place`,
//         photo: `img/room.jpg`,
//         price: 80,
//         type: TYPES.room,
//         rating: 4,
//         isPremium: false,
//         isFavorite: true,
//         images: [
//           `img/room.jpg`,
//           `img/apartment-01.jpg`,
//           `img/apartment-02.jpg`,
//           `img/apartment-03.jpg`,
//           `img/studio-01.jpg`,
//           `img/apartment-01.jpg`,
//         ],
//         description: [
//           `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//           `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
//         ],
//         feature: `3 Bedrooms`,
//         guests: `Max 4 adults`,
//         inside: [
//           `Wi-Fi`,
//           `Washing machine`,
//           `Towels`,
//           `Heating`,
//           `Coffee machine`,
//           `Baby seat`,
//           `Kitchen`,
//           `Dishwasher`,
//           `Cabel TV`,
//           `Fridge`,
//         ],
//         owner: {
//           avatar: `img/avatar-angelina.jpg`,
//           name: `Angelina`,
//           isStar: true,
//         },
//         coordinates: [52.369553943508, 4.85309666406198],
//         reviews: [
//           {
//             description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//             rating: 3,
//             name: `Max`,
//             date: `December 24, 2018`
//           },
//           {
//             description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
//             rating: 4,
//             name: `James`,
//             date: `October 20, 2018`
//           },
//           {
//             description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//             rating: 5,
//             name: `Ron`,
//             date: `July 14, 2018`
//           },
//         ],
//       },
//       {
//         id: 7,
//         city: `Amsterdam`,
//         title: `Canal View Prinsengracht`,
//         photo: `img/apartment-02.jpg`,
//         price: 132,
//         type: TYPES.apartment,
//         rating: 3,
//         isPremium: false,
//         isFavorite: false,
//         images: [
//           `img/room.jpg`,
//           `img/apartment-01.jpg`,
//           `img/apartment-02.jpg`,
//           `img/apartment-03.jpg`,
//           `img/studio-01.jpg`,
//           `img/apartment-01.jpg`,
//         ],
//         description: [
//           `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//           `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
//         ],
//         feature: `3 Bedrooms`,
//         guests: `Max 4 adults`,
//         inside: [
//           `Wi-Fi`,
//           `Washing machine`,
//           `Towels`,
//           `Heating`,
//           `Coffee machine`,
//           `Baby seat`,
//           `Kitchen`,
//           `Dishwasher`,
//           `Cabel TV`,
//           `Fridge`,
//         ],
//         owner: {
//           avatar: `img/avatar-angelina.jpg`,
//           name: `Angelina`,
//           isStar: true,
//         },
//         coordinates: [52.3909553943508, 4.929309666406198],
//         reviews: [
//           {
//             description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//             rating: 3,
//             name: `Max`,
//             date: `December 24, 2018`
//           },
//           {
//             description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
//             rating: 4,
//             name: `James`,
//             date: `October 20, 2018`
//           },
//           {
//             description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//             rating: 5,
//             name: `Ron`,
//             date: `July 14, 2018`
//           },
//         ],
//       },
//     ],
//   },
// ];
