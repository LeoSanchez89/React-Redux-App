import React from "react";
import { connect } from "react-redux";

import { Card, CardTitle, CardText } from "reactstrap";

const MovieList = props => {
    console.log(props);
	return (
		<div className="card-container">
			{props.error ? (
				<div className="error">{props.error}</div>
			) : (
				props.movies.map(movie => (
					<Card body inverse color="info" className="movie-card">
						<CardTitle>
							<h2>{movie.title}<hr className="underline" /></h2>
						</CardTitle>
						<CardText>
							<p className="card-info">{movie.description}</p>
							<p>
								<span className="bold">Director:</span> {movie.director}
							</p>
							<p><span className="bold">Release Date:</span> {movie.release_date}</p>
						</CardText>
					</Card>
				))
			)}
		</div>
	);
};
const mapStateToProps = state => {
	return {
		movies: state.movies,
		error: state.error
	};
};
export default connect(mapStateToProps, {})(MovieList);
