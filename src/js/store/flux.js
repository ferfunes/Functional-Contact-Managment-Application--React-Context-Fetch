const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: 1,
					full_name: "Fernando Funez",
					email: "fercho@gmail.comm",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA"
				},

				{
					id: 2,
					full_name: "Sharon Elman",
					email: "shuspaluspa@gmail.comm",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA"
				}
			]
		},

		actions: {
			addContact: (name, address, phone, email) => {
				let store = getStore();
				setStore({
					contacts: store.contacts.concat([
						{
							full_name: name,
							email: email,
							phone: phone,
							address: address,
							id: store.contacts.length + 3
						}
					])
				});
			},
			deleteContact: id => {
				console.log(id);
			}
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
