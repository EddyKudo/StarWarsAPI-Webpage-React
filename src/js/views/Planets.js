import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron row">
			{store.planets.map((planet, index) => (
				<Card key={index} data={planet} image={store.planetImages[index].urlImg} />
			))}
		</div>
	);
};
