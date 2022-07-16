import pokeApi from "../apis/pokeApi";
const FETCH_POKE = "FETCH_POKE";
const ADD_FAV = "ADD_FAV";
const RMV_FAV = "RMV_FAV";
const RMV_ALL_FAV = "RMV_ALL_FAV";

export const fetchPokes = () => {
  return async (dispatch) => {
    const pokesList = await pokeApi.get();
    dispatch({
      type: FETCH_POKE,
      payload: pokesList.data,
    });
  };
};

// export const addFav = (id, name, imgSrc) => {
//   return {
//     type: ADD_FAV,
//     payload: { id, name, imgSrc },
//   };
// };

export const addFav = (poke) => {
  return {
    type: ADD_FAV,
    payload: poke,
  };
};

export const rmvFav = (id) => {
  return {
    type: RMV_FAV,
    payload: id,
  };
};

export const rmvAllFav = () => {
  return {
    type: RMV_ALL_FAV,
  };
};
