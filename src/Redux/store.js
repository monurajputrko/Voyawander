import { Middleware,applyMiddleware,legacy_createStore } from "redux";
import userReducer from "./auth/reducer";
import thunk from "redux-thunk";

const store = legacy_createStore(userReducer,applyMiddleware(thunk));

export default store;

