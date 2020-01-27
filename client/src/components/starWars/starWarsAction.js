import axios from "axios";

export const getStarWarsData = () => dispatch => {
  axios.get("https://swapi.co/api/people").then(res =>
    dispatch({
      type: "GET_STARWARS",
      payload: res.data
    })
  );
};
