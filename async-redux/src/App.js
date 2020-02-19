import React from 'react';
import './App.css';
import MoviePage from "./components/MoviePage";
// import { Provider } from "react-redux";

function App() {
  
  return (
		// <Provider>
			<div className="App">
				<header>
					<h1>Studio Ghibli Movies</h1>
      </header>
      <MoviePage />
			</div>
		// </Provider>
	);
}

export default App;
