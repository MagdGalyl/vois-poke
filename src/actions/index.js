import pokeApi from "../apis/pokeApi";
const FETCH_POKE = "FETCH_POKE";
const ADD_FAV = "ADD_FAV";
const RMV_FAV = "RMV_FAV";
const RMV_ALL_FAV = "RMV_ALL_FAV";
// const IS_FAV = "IS_FAV";

export const fetchPokes = () => {
  return async (dispatch) => {
    const pokesList = await pokeApi.get();
    dispatch({
      type: FETCH_POKE,
      payload: pokesList.data,
    });
  };
};

// export const addFav = (poke) => {
//   return {
//     type: ADD_FAV,
//     payload: poke,
//   };
// };

// Adding Toggle
export const addFav = (poke2) => {
  return {
    type: ADD_FAV,
    payload: poke2,
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

// Beta 01
// export const isFav = () => {
//   return {
//     type: IS_FAV,
//   };
// };
