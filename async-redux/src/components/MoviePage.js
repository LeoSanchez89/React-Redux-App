import React from "react";
import pic from "../img/studioGhibli.png";

import { connect } from "react-redux";
import { getData } from "../actions/Actions";

import { Button } from "reactstrap";

const MoviePage = props => {
	const handleGetData = e => {
		e.preventDefault();
		props.getData();
	};
	return (
		<section>
			<div>
				<img src={pic} alt="Studio Ghibli Characters"></img>
			</div>
			<div>
				{props.isFetchingData ? (
					<div>Retrieving Movies...</div>
				) : props.movies.length === 0 ? (
					<Button color="info" onClick={handleGetData}>
						Show Me The Movies!
					</Button>
				) : null}
			</div>
		</section>
	);
};
const mapStateToProps = state => {
	return {
        isFetchingData: state.isFetchingData,
        movies: state.movies
	};
};

export default connect(mapStateToProps, { getData })(MoviePage);
