const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "People",
					background: "Brown",
					initial: "white"
				},
				{
					title: "Planets",
					background: "Brown",
					initial: "white"
				},
				{
					title: "Vehicles",
					background: "Brown",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				fetch("https://swapi.co/api/planets") // fetching planets from SWAPI --- @EddyKudo
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ planets: data.results }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				fetch("https://swapi.co/api/people") // fetching planets from SWAPI --- @EddyKudo
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ people: data.results }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				fetch("https://swapi.co/api/vehicles") // fetching planets from SWAPI --- @EddyKudo
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ vehicles: data.results }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
