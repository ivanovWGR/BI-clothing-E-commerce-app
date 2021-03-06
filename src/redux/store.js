import rootReducer from "./root-reducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
const midlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...midlewares));

export default store;
