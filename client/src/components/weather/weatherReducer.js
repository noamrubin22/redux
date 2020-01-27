const initialState = {
  weatherData: []
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        weatherData: action.payload
      };
    default:
      return state;
  }
};
