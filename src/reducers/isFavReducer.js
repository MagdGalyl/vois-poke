const initialState = false;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "IS_FAV":
      console.log(state, "hi from reducer");
      return state;

    default:
      return state;
  }
};
