import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import StarWars from "./components/starWars/starWars";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>redux</h1>
        <StarWars />
        <Weather />
      </div>
    </Provider>
  );
}

export default App;
