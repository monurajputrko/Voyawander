export const setSingleProduct = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_SINGLE", payload: payload });
  };
};

// export const removeSingleProduct = () => {
//   return (dispatch) => {
//     dispatch({ type: REMOVE_SINGLE_PRODUCT });
//   };
// };
