import React, { useContext, useState } from "react";
import { Image, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = props => {
	const { actions, store } = useContext(Context);
	const [selected, setSelected] = useState(false);
	const [showModal, setModal] = useState(false);

	const storeArray = [];

	for (const [key, value] of Object.entries(props.data)) {
		storeArray.push(`${key}:  ${value}`);
	}

	const handleClick = e => {
		setSelected(!selected);
		actions.toggleFavorite(props.data);
	};
	return (
		<div className="bg-white col-3 border border-light rounded p-1">
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
				<Button className="float-right mr-2 mb-1" onClick={() => setModal(true)}>
					INFO
				</Button>
			</div>

			<div>
				<Modal size="lg" show={showModal} onHide={() => setModal(false)}>
					<Modal.Header closeButton>
						<Modal.Title>{props.data.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Image src={props.image} width="100%" />
						<ul className="text-break">
							{storeArray.map((e, index) => {
								return <li key={index}>{e}</li>;
							})}
						</ul>
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
