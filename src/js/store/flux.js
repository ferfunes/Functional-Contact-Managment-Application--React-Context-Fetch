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
			editContact: (name, address, phone, email, id) => {
				let store = getStore();
				let contactIndex = store.contacts.findIndex(item => item.id == id);
				console.log("index", contactIndex);
				setStore({
					contacts: store.contacts[contactIndex]([
						{
							full_name: name,
							email: email,
							phone: phone,
							address: address
						}
					])
				});
			},
			deleteContact: id => {
				let store = getStore();
				let filteredItems = store.contacts.filter((contact, index) => contact.id !== id);
				console.log(filteredItems);
				//console.log(key);
				setStore({ contacts: filteredItems });
			}
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
