import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

export const Single = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			{store.people.length > 0 ? (
				<div>
					<div className="jumbotron row">
						<Card
							name={store.people[9].name}
							image="https://styles.redditmedia.com/t5_lf99r/styles/profileIcon_o6afu13cnh811.jpg"
						/>
						<Card name={store.people[1].name} image="https://wallpapercave.com/wp/wp2182707.jpg" />
						<Card
							name={store.people[3].name}
							image="https://images.wallpaperscraft.com/image/star_wars_darth_vader_art_rain_102268_1600x1200.jpg"
						/>
						<Card name={store.people[0].name} image="https://wallpapercave.com/wp/U3iXIJO.jpg" />
					</div>
					<hr className="my-2" />

					<h3>{store.planets[0].name}</h3>

					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			) : (
				<p>No Jumbo</p>
			)}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
