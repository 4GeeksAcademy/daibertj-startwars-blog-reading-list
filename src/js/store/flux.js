const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLBASE: "https://www.swapi.tech/api",
			endPoint: ["people", "planets", "vehicles"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getData: () => {
                let store = getStore()
                if (store.people.length <= 0) {

                    store.endPoint.forEach(async (endPoint) => {
							console.log(endPoint)
                        let response = await fetch(`${store.URLBASE}/${endPoint}`)
                        let data = await response.json()
					
                        data.results.forEach(async (item) => {
                            let responseItem = await fetch(`${store.URLBASE}/${endPoint}/${item.uid}`)
                            let dataItem = await responseItem.json()

                            setStore({
                                [endPoint]: [...store[endPoint], dataItem.result]
                            })
                            window.localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))

                        })
                    })
                }

            },
			getUpdateFavorite: (item) => {
				const store = getStore();
				
				const favorite = store.favorites.find((fav) => fav._id == item._id);
				
				if (favorite) {
				  setStore({
					favorites: store.favorites.filter((fav) => fav._id !== item._id),
				  });
				  localStorage.setItem("favorites", JSON.stringify(store.favorites));
				} else {
				  setStore({ favorites: [...store.favorites, item] });
				  localStorage.setItem("favorites", JSON.stringify(store.favorites));
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
