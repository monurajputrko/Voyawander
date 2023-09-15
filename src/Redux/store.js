import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as homeReducer } from "./homepage/reducer";
import { reducer as paymentReducer } from "./payment/reducer";
import thunk from "redux-thunk";

// combine the reducers with combineReducer-->

const reducer = combineReducers({
  home: homeReducer,
  detail: paymentReducer,
});

export const store = legacy_createStore(reducer, applyMiddleware(thunk));
