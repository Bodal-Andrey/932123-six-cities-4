import offerAdapter from "./offer-adapter.js";

const offersStart = [
  {
    bedrooms: 2,
    city: {name: `Hamburg`, location: {latitude: 53.550341, longitude: 10.000654, zoom: 13}},
    description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
    goods: [`Laptop friendly workspace`, `Breakfast`],
    [`max_adults`]: 7,
    host: {[`avatar_url`]: `img/avatar-angelina.jpg`, id: 25, [`is_pro`]: true, name: `Angelina`},
    id: 2,
    [`is_favorite`]: false,
    [`is_premium`]: false,
    location: {latitude: 53.558341000000006, longitude: 10.001654, zoom: 16},
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`],
    [`preview_image`]: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
    price: 238,
    rating: 3.1,
    title: `Amazing and Extremely Central Flat`,
    type: `apartment`,
  }
];

const offersEnd = [
  {
    bedrooms: 2,
    city: {name: `Hamburg`, location: {latitude: 53.550341, longitude: 10.000654, zoom: 13}},
    description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
    goods: [`Laptop friendly workspace`, `Breakfast`],
    [`max_adults`]: 7,
    host: {[`avatar_url`]: `img/avatar-angelina.jpg`, id: 25, [`is_pro`]: true, name: `Angelina`},
    id: 2,
    [`is_favorite`]: false,
    [`is_premium`]: false,
    location: {latitude: 53.558341000000006, longitude: 10.001654, zoom: 16},
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`],
    [`preview_image`]: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
    price: 238,
    rating: 3.1,
    title: `Amazing and Extremely Central Flat`,
    type: `apartment`,
  }
];

it(`Should offer adapter work correct`, () => {
  expect(offerAdapter(offersStart[0])).toEqual(offersEnd[0]);
});
