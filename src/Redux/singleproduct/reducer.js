const initState = {
  title: "Hotel Sahara Star",
  image:
    "https://fastui.cltpstatic.com/image/upload/w_1016,h_624,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4192/41924/images/image_3195007_original.jpg",
  price: 12995,
  rating: 4.6,
  location: "Mumbai Domestic Airport, Mumbai",
  city: "Mumbai",
  category: "hotel",
  start_date: "2023-10-10",
  end_date: "2023-10-20",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_SINGLE":
      return payload;
    default:
      return state;
  }
};
