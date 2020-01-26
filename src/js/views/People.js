import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

export const People = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron row">
			{store.people.map((person, index) => (
				<Card
					key={index}
					name={person.name}
					image="https://styles.redditmedia.com/t5_lf99r/styles/profileIcon_o6afu13cnh811.jpg"
				/>
			))}
		</div>
	);
};
