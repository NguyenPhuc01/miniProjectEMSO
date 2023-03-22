import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reduces";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default Store;
