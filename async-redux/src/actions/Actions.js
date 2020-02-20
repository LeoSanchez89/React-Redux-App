import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_MOVIES = "UPDATE_MOVIES";
export const SET_ERROR = "SET_ERROR";
export const getData = () => dispatch => {
	dispatch({ type: FETCH_DATA });
	axios
		.get("https://ghibliapi.herokuapp.com/films")
		.then(res => {
			console.log(res.data);
			dispatch({ type: UPDATE_MOVIES, payload: res.data });
		})
		.catch(err => {
			// console.error("error fetching data", err);
			dispatch({ type: SET_ERROR, payload: "Error Fetching Movies From API" });
		});
};
