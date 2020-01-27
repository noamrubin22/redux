const initialState = {
  starWarsData: []
};

export const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STARWARS":
      return {
        ...state,
        starWarsData: action.payload
      };
    default:
      return state;
  }
};
