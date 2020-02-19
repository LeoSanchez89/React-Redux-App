import React from "react";
import pic from "../img/studioGhibli.png";

const MoviePage = props => {
	return (
		<section>
			<div>
				<img src={pic}></img>
			</div>
			<div>
				<button>Show Me The Movies!</button>
			</div>
		</section>
	);
};

export default MoviePage;
