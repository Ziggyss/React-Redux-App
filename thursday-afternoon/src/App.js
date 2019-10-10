import React from "react";
import Images from "./components/Images";
import Navbar from "./components/Navbar";
import "./App.css";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import * as reducers from './state/reducers';

const monsterReducer = combineReducers({
  images: reducers.imageReducer,
  faves: reducers.favesReducer,

})

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Images />
      </Provider>
    </div>
  );
}

export default App;
