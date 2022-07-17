const initialState = false;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "IS_FAV":
      return state;

    default:
      return state;
  }
};
