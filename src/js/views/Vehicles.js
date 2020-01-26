import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron row">
			{store.vehicles.map((vehicle, index) => (
				<Card key={index} name={vehicle.name} image="https://wallpapercave.com/wp/wp2182707.jpg" />
			))}
		</div>
	);
};
