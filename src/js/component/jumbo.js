import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const Jumbo = props => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.people.length > 0 ? (
				<div className="jumbotron row">
					<Card
						data={store.people[9]}
						image="https://styles.redditmedia.com/t5_lf99r/styles/profileIcon_o6afu13cnh811.jpg"
					/>
					<Card data={store.people[1]} image="https://wallpapercave.com/wp/wp2182707.jpg" />
					<Card
						data={store.people[3]}
						image="https://images.wallpaperscraft.com/image/star_wars_darth_vader_art_rain_102268_1600x1200.jpg"
					/>
					<Card data={store.people[0]} image="https://wallpapercave.com/wp/U3iXIJO.jpg" />
				</div>
			) : (
				<p>No Jumbo</p>
			)}
		</div>
	);
};
