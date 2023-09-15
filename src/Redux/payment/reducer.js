import { REMOVE_SINGLE_PRODUCT, UPDATE_SINGLE_PRODUCT } from "./actionTypes";

const initState = {
  title: null,
  price_per_day: null,
  group_size: null,
  act_price: null,
  tour_length: null,
  save_price: null,
  str_price: null,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_SINGLE_PRODUCT:
      console.log(payload);
      return payload;
    case REMOVE_SINGLE_PRODUCT:
      return initState;
    default:
      return state;
  }
};
