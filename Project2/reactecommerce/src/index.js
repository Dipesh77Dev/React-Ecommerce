import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   {/* <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> */}
  <App />
</Provider>
);

