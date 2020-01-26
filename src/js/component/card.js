import React, { useEffect } from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="bg-white col-3">
			<div className="d-flex">
				<img className="my-2" src={props.image} alt={props.name} width="100%" />
			</div>
			<div>
				<h3>
					{props.name}
					<i className="fas fa-star float-right" />
				</h3>
			</div>
			<div>
				<p>Card Description</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};
