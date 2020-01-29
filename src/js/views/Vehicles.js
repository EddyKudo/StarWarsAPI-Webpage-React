import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron row w-100 mx-auto">
			{store.vehicles.map((vehicle, index) => (
				<Card key={index} data={vehicle} image={store.vehImages[index].urlImg} />
			))}
		</div>
	);
};
