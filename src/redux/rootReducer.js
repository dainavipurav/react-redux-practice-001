import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import { combineReducers } from "redux";
import { fishReducer } from "./fish/fishReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  fish: fishReducer,
});

export default rootReducer;
