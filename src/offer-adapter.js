const offerAdapter = (data) => {
  return {
    id: data.id,
    city: {
      name: data.city.name,
      coordinates: [data.city.location.latitude, data.city.location.longitude],
      zoom: data.city.location.zoom,
    },
    title: data.title,
    previewImage: data.preview_image,
    pictures: data.images,
    price: data.price,
    type: data.type,
    rating: data.rating,
    isPremium: data.is_premium,
    isBookmark: data.is_bookmark,
    bedrooms: data.bedrooms,
    description: data.description,
    guests: data.max_adults,
    features: data.goods,
    hostId: 1,
    host: {
      avatarUrl: data.host.avatar_url,
      id: data.host.id,
      isPro: data.host.is_pro,
      name: data.host.name
    },
    coordinates: [52.3909553943508, 4.85309666406198],
    location: {
      coordinates: [data.location.latitude, data.location.longitude],
      zoom: data.location.zoom,
    },
  };
};

export default offerAdapter;