import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navigation">
			<nav className="navbar navbar-light bg-dark pb-0">
				<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" width="80px" />
				</Link>
				<div className="ml-auto">
					<input type="text" placeholder="Looking for..." />
					<i className="far fa-eye mx-3 text-primary" />

					<Link to="/demo">
						<button className="btn btn-primary">Resourses</button>
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
