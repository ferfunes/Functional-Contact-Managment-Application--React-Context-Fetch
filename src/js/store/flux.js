const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: "23",
					full_name: "Fernando Funez",
					email: "tom@gmail.comm",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA"
				}
			]
		},
		actions: {
			deleteContact: index => {
				const store = getStore();

				var data = store.contacts[index].id;
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
