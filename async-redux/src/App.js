import React from 'react';
import './App.css';
import MoviePage from "./components/MoviePage";
import MovieList from "./components/MovieList";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { moviesReducer as reducer } from "./reducers/Reducer";
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  
  return (
		<Provider store={store}>
		<div className="App">
			<header>
				<h1>Studio Ghibli Movies</h1>
			</header>
			<MoviePage />
			<MovieList />
		</div>
	 </Provider>
	);
}

export default App;
