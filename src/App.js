import React, { Component } from "react";
import "./App.css";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends Component {
	state = { currentUser: { name: "Noman" } };

	render() {
		return (
			<UserContext.Provider value={this.state.currentUser}>
				<div>
					<MoviePage />
				</div>
			</UserContext.Provider>
		);
	}
}

export default App;
