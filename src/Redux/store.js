
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as homeReducer } from "./homepage/reducer";
import { reducer as paymentReducer } from "./payment/reducer";
import { reducer as singleProductReducer } from "./singleproduct/reducer";
import thunk from "redux-thunk";
import userReducer from "./auth/reducer";

// combine the reducers with combineReducer-->

const reducer = combineReducers({
  home: homeReducer,
  detail: paymentReducer,
  singleproduct: singleProductReducer,
  auth: userReducer
});

export const store = legacy_createStore(reducer, applyMiddleware(thunk));