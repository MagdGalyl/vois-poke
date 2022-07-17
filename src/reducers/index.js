import { combineReducers } from "redux";
import favReducer from "./favReducer";
import pokesReducer from "./pokesReducer";
import isFavReducer from "./isFavReducer";

export default combineReducers({
  pokes: pokesReducer,
  fav: favReducer,
  switch: isFavReducer,
});
