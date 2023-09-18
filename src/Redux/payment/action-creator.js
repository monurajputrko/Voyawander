import { UPDATE_SINGLE_PRODUCT, REMOVE_SINGLE_PRODUCT } from "./actionTypes";

export const updateSingleProduct = (payload) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_SINGLE_PRODUCT, payload: payload });
  };
};

export const removeSingleProduct = () => {
  return (dispatch) => {
    dispatch({ type: REMOVE_SINGLE_PRODUCT });
  };
};
