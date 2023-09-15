import { REMOVE_SINGLE_PRODUCT, UPDATE_SINGLE_PRODUCT } from "./actionTypes";

const initState = {};

export const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_SINGLE_PRODUCT:
      return { payload };
    case REMOVE_SINGLE_PRODUCT:
      return { initState };
    default:
      return state;
  }
};
