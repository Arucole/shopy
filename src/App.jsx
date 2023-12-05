import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
