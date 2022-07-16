const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return [...state, payload];

    case "RMV_FAV":
      return state.filter((s) => s.payload !== payload);

    default:
      return state;
  }
};