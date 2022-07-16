import { combineReducers } from "redux";
import favReducer from "./favReducer";
import pokesReducer from "./pokesReducer";

export default combineReducers({
  pokes: pokesReducer,
  fav: favReducer,
});
