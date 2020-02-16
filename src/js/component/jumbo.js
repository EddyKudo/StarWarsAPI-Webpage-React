import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const Jumbo = props => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.people.length > 0 ? (
				<div className="jumbotron row mx-auto w-100">
					<Card
						data={store.people[9]}
						image="https://styles.redditmedia.com/t5_lf99r/styles/profileIcon_o6afu13cnh811.jpg"
					/>
					<Card data={store.people[1]} image="https://wallpapercave.com/wp/wp2182707.jpg" />
					<Card
						data={store.people[3]}
						image="https://www.highreshdwallpapers.com/wp-content/uploads/2017/05/Demonic-Darth-Vader-Wallpaper-1280x960.jpg"
					/>
					<Card data={store.people[0]} image="https://wallpapercave.com/wp/U3iXIJO.jpg" />
				</div>
			) : (
				<p>No Jumbo</p>
			)}
		</div>
	);
};
