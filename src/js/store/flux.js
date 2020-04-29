const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			vehImages: [
				{
					name: "Sand Crawler",
					urlImg: "https://i.pinimg.com/originals/f2/7c/8b/f27c8b2e228ae33fc2eab2df58d506e6.jpg"
				},
				{
					name: "T-16 skyhopper",
					urlImg: "https://media.moddb.com/cache/images/mods/1/36/35029/thumb_620x2000/Skyhopper.jpg"
				},
				{
					name: "X-34 landspeeder",
					urlImg:
						"https://squir.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/7/47948.jpg"
				},
				{
					name: "TIE/LN starfighter",
					urlImg:
						"https://cdna.artstation.com/p/assets/images/images/002/488/170/large/bruno-parillo-screenshot135.jpg"
				},
				{
					name: "Snowspeeder",
					urlImg: "https://i.pinimg.com/originals/13/1b/0d/131b0d6360800d68c41cb469f9e0e504.jpg"
				},
				{
					name: "TIE bomber",
					urlImg: "https://cdn.hipwallpaper.com/i/46/81/lpOKd9.png"
				},
				{
					name: "AT-AT",
					urlImg: "https://i.pinimg.com/originals/20/04/ca/2004caf55a4de767be4c18715c52b7bc.jpg"
				},
				{
					name: "AT-ST",
					urlImg: "https://cdn.hipwallpaper.com/i/28/44/0w5SFt.jpg"
				},
				{
					name: "Storm IV Twin-Pod cloud car",
					urlImg:
						"https://cdna.artstation.com/p/assets/images/images/009/354/520/large/jay-machado-cloudcar-0003.jpg"
				},
				{
					name: "Sail barge",
					urlImg:
						"https://lumiere-a.akamaihd.net/v1/images/the-khetanna_d1d5b294.jpeg?region=0%2C160%2C1560%2C879&width=768"
				},
				{
					name: "",
					urlImg: ""
				}
			],
			planetImages: [
				{
					name: "Alderaan",
					urlImg: "https://images.wallpaperscraft.com/image/space_planets_satellite_131962_1400x1050.jpg"
				},
				{
					name: "Yavin IV",
					urlImg: "https://wallpapersmug.com/download/1600x1200/bd919d/planet-surface-outer-space.jpg"
				},
				{
					name: "Hoth",
					urlImg:
						"https://images.wallpaperscraft.com/image/winter_night_mountains_road_planet_fantastic_landscape_79420_1600x1200.jpg"
				},
				{
					name: "Dagobah",
					urlImg: "https://images.wallpaperscraft.com/image/house_forest_tree_126440_1600x1200.jpg"
				},
				{
					name: "Bespin",
					urlImg: "https://i.pinimg.com/originals/01/0a/84/010a84906942293fab71455b173498d6.jpg"
				},
				{
					name: "Endor",
					urlImg: "http://eskipaper.com/images/beautiful-forest-wallpaper-1.jpg"
				},
				{
					name: "Naboo",
					urlImg: "https://vignette.wikia.nocookie.net/starwars/images/6/64/N-1_Starfighter.png"
				},
				{
					name: "Coruscant",
					urlImg: "https://i.pinimg.com/originals/2f/d6/5d/2fd65d4444cb8ff75a94353d0b4154a2.jpg"
				},
				{
					name: "Kamino",
					urlImg: "https://mcdn.wallpapersafari.com/medium/99/72/YVFRgp.jpg"
				},
				{
					name: "Geonosis",
					urlImg: "https://i.pinimg.com/originals/25/cb/8d/25cb8d1bfaed27b42e2f9c65441fa258.jpg"
				}
			],
			peopleImages: [
				{
					name: "Luke Skywalker",
					urlImg: "https://wallpapercave.com/wp/U3iXIJO.jpg"
				},
				{
					name: "C-3PO",
					urlImg: "https://wallpapercave.com/wp/wp2182707.jpg"
				},
				{
					name: "R2-D2",
					urlImg: "https://wallpapercave.com/wp/TCdVzW8.jpg"
				},
				{
					name: "Darth Vader",
					urlImg:
						"https://www.highreshdwallpapers.com/wp-content/uploads/2017/05/Demonic-Darth-Vader-Wallpaper-1280x960.jpg"
				},
				{
					name: "Leia Organa",
					urlImg: "https://i.kinja-img.com/gawker-media/image/upload/vag2wsc3hmh8yi63zu6v.jpg"
				},
				{
					name: "Owen Lars",
					urlImg: "https://i0.wp.com/www.heyuguys.com/images/2017/06/Joel-Edgerton-Star-Wars.jpg"
				},
				{
					name: "Beru Whitesun lars",
					urlImg: "https://pm1.narvii.com/6293/db859b249381c30a6be8f8242046105e552cd54d_hq.jpg"
				},
				{
					name: "R5-D4",
					urlImg:
						"https://1.bp.blogspot.com/-iGPvHwoNdYI/WSjldmO_DMI/AAAAAAAAcQc/s8Ni9i9zBXg8K0GuHt9Tngb6_mVqCr5BgCEw/s1600/IMG_1722.JPG"
				},
				{
					name: "Biggs Darklighter",
					urlImg: "https://www.eurobricks.com/forum/uploads/gallery/album_196/gallery_11254_196_46899.jpg"
				},
				{
					name: "Obi-Wan Kenobi",
					urlImg: "https://styles.redditmedia.com/t5_lf99r/styles/profileIcon_o6afu13cnh811.jpg"
				}
			],
			favorites: []
		},
		actions: {
			getCorrectImage: itemObject => {
				// birth_year - person
				// climate - planet
				// crew - vehicles
				let itemType = "";

				if (itemObject.hasOwnProperty("crew")) {
					itemType = "vehImages";
				} else if (itemObject.hasOwnProperty("climate")) {
					itemType = "planetImages";
				} else {
					itemType = "peopleImages";
				}

				// look @ itemObject to see which property it contains
				let store = getStore();
				let image = store[itemType].filter(item => itemObject.name === item.name)[0].urlImg;
				return image;
				// Then, we need to loop the correct array in the store for the images
			},
			toggleFavorite: person => {
				let store = getStore();
				let index = store.favorites.indexOf(person);
				console.log(index);
				if (index === -1) {
					store.favorites.push(person);
				} else {
					store.favorites.splice(index, 1);
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				fetch("https://swapi.dev/api/planets/") // fetching planets from SWAPI --- @EddyKudo
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

				fetch("https://swapi.dev/api/people/") // fetching people from SWAPI --- @EddyKudo
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

				fetch("https://swapi.dev/api/vehicles/") // fetching vehs from SWAPI --- @EddyKudo
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
