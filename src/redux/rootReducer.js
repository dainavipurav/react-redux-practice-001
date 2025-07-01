import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import { combineReducers } from "redux";
import { fishReducer } from "./fish/fishReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  fish: fishReducer,
  user: userReducer,
});

export default rootReducer;
