import React from "react";
import pic from "../img/studioGhibli.png";

import { connect } from "react-redux";
import { getData } from "../actions/Actions";

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
				) : (
					<button onClick={handleGetData}>Show Me The Movies!</button>
				)}
			</div>
		</section>
	);
};
const mapStateToProps = state => {
	return {
		isFetchingData: state.isFetchingData
	};
};

export default connect(mapStateToProps, { getData })(MoviePage);


