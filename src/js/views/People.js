import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

export const People = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron row">
			{store.people.length > 0 &&
				store.people.map((person, index) => (
					<Card key={index} data={person} image={store.peopleImages[index].urlImg} />
				))}
		</div>
	);
};
