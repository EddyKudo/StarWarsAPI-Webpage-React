import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Starred } from "./views/Starred";
import { Single } from "./views/single";
import { People } from "./views/People";
import { Vehicles } from "./views/Vehicles";
import { Planets } from "./views/Planets";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Favorites } from "./views/favorites";

//create your first component demo
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column bg-secondary">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/Starred" component={Starred} />
						<Route path="/Planets" component={Planets} />
						<Route path="/People" component={People} />
						<Route path="/Vehicles" component={Vehicles} />
						<Route path="/Favotites" component={Favorites} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
