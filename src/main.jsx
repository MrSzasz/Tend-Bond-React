import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./app/store";
import getFirestoreApp from "./firebase/config";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

getFirestoreApp();

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
