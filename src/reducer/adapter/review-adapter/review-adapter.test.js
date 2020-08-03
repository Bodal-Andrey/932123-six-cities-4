import reviewAdapter from "./review-adapter.js";


const reviewsInintial = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2018-03-07T15:15:06.569Z`,
  id: 1,
  rating: 3,
  user: {
    [`avatar_url`]: `img/1.png`,
    id: 4,
    [`is_pro`]: true,
    name: `Max`
  }
};

const reviewsResult = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2018-03-07T15:15:06.569Z`,
  id: 1,
  rating: 3,
  user: {
    avatarUrl: `img/1.png`,
    id: 4,
    isPro: true,
    name: `Max`
  }
};

it(`Should comments adapter work correct`, () => {
  expect(reviewAdapter(reviewsInintial)).toEqual(reviewsResult);
});
