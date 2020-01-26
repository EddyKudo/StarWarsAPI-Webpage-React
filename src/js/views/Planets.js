import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron row">
			{store.planets.map((planet, index) => (
				<Card key={index} name={planet.name} image="https://wallpapercave.com/wp/U3iXIJO.jpg" />
			))}
		</div>
	);
};
