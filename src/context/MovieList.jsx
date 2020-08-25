import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
	render() {
		return (
			<UserContext.Consumer>
				{UserContext => <div>Movie List {UserContext.name}</div>}
			</UserContext.Consumer>
		);
	}
}

export default MovieList;
