import React from "react";
import { connect } from "react-redux";

const MovieList = props => {
    console.log(props);
	return (
		<div>
			{props.error ? (
				<div className="error">{props.error}</div>
			) : (
				props.movies.map(movie => <div>{movie.title}</div>)
			)}
			{/* <p>title</p>
			<p>description</p>
			<p>director</p>
			<p>release_date</p> */}
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
