import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// We have to create our Store here !
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./Features/user";
import themeReducer from "./Features/theme";

const store = configureStore({
  reducer: {
    // Passing the reducers from slice to the store
    user_: userReducer,
    theme: themeReducer,
  },
});
// We have to create a provider !

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
