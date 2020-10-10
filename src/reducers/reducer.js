const initialState = [];

export const searchResult = (state = initialState, action) => {
  if (action.type === "add") {
    return action.payload;
  }
  return state;
};
