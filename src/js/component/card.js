import React, { useContext, useState } from "react";
import { Image, Button, Modal, Jumbotron } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = props => {
	const { actions, store } = useContext(Context);
	const [selected, setSelected] = useState(false);
	const [showModal, setModal] = useState(false);

	console.log("data:", props.data);

	const handleClick = e => {
		setSelected(!selected);
		actions.toggleFavorite(props.data);
	};
	return (
		<div className="bg-white col-3">
			<div className="d-flex">
				<img className="my-2" src={props.image} alt="test" width="100%" />
			</div>
			<div>
				<h3>
					{props.data.name}
					<i
						onClick={e => handleClick(e)}
						className="fas fa-star float-right"
						style={selected ? { color: "#FFFF3C" } : { color: "black" }}
					/>
				</h3>
			</div>
			<div>
				<Button onClick={() => setModal(true)}>Read More...</Button>
			</div>

			<div>
				<Modal size="lg" show={showModal} onHide={() => setModal(false)}>
					<Modal.Header closeButton>
						<Modal.Title>{props.data.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Image src={props.image} width="100%" />
					</Modal.Body>
					<Button variant="danger" onClick={() => setModal(false)}>
						Close
					</Button>
				</Modal>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object,
	image: PropTypes.string
};
