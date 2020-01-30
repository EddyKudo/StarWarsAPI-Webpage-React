import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navigation">
			<nav className="navbar navbar-light bg-dark pb-0">
				<Link to="/">
					<img src="https://i.imgur.com/5ZvtHwm.png" width="90px" />
				</Link>
				<div className="ml-auto">
					<input type="text" placeholder="Looking for..." />
					<i className="far fa-eye mx-3 text-primary" />

					<Link to="/Favotites">
						<button className="btn btn-primary">Favorites</button>
					</Link>
				</div>
			</nav>

			<div className=" navmenu mb-1">
				<div className="wrapper row text-center m-auto">
					<div className="col-4 border-right border-danger" href="/People">
						<Link to="/People">People</Link>
					</div>
					<div className="col-4 border-right border-danger" href="/Vehicles">
						<Link to="/Vehicles">Vehicles</Link>
					</div>
					<div className="col-4" href="/Planets">
						<Link to="/Planets">Planets</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
