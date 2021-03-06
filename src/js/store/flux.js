const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: [],
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
				//let store = getStore();
				console.log(
					JSON.stringify({
						agenda_slug: "Fernando_agenda",
						full_name: name,
						email: email,
						phone: phone,
						address: address
					})
				);
				// setStore({
				//	contacts: store.contacts.concat([
				//		{
				//			full_name: name,
				//			email: email,
				//			phone: phone,
				//			address: address,
				//			id: store.contacts.length + 3
				//		}
				//	])
				//});
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "post",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "Fernando_agenda",
						full_name: name,
						email: email,
						phone: phone,
						address: address
					})
				})
					.then(response => console.log(response.json()))
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Fernando_agenda")
							.then(response => response.json())
							.then(data => {
								console.log(data);
								setStore({ agenda: data });
							});
					});
			},
			editContact: (name, address, phone, email, id, history) => {
				console.log("$$$$", name, address, phone, email, id);
				let store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "put",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "Fernando_agenda",
						full_name: name,
						email: email,
						phone: phone,
						address: address
					})
				})
					.then(response => console.log(response.json()))
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Fernando_agenda")
							.then(response => response.json())
							.then(data => {
								console.log(data);
								setStore({ agenda: data });
							});
					})
					.then(() => history.push("/"));

				//console.log("old", store.contacts);
				//console.log("name:", name);

				//let contactIndex = store.contacts.findIndex(item => item.id == id);
				//console.log("index", contactIndex);
				//let updated_store = store.contacts
				//	.slice(0, contactIndex)
				//	.concat({
				//		...store.contacts[contactIndex],
				//		full_name: name,
				//		email: email,
				//		address: address,
				//		phone: phone
				//	})
				//	.concat(store.contacts.slice(contactIndex + 1));
				//console.log("Upd", updated_store);
				//setStore({ contacts: updated_store });
			},
			deleteContact: id => {
				console.log(id);
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "delete",
					headers: { "Content-Type": "aplication/json" }
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Fernando_agenda")
						.then(response => response.json())
						.then(data => {
							setStore({ agenda: data });
						});
				});

				//let filteredItems = store.contacts.filter((elem, index) => {
				//return id !== index;
				//});
				//console.log(filteredItems);
				//console.log(key);
				//setStore({ contacts: filteredItems });
			}
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
