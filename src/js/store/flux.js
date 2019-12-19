const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contactlist: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			GetContactList: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_xii")
					.then(resp => {
						return resp.json();
					})
					.then(obj => {
						setStore({ contactlist: obj });
					});
			},
			CreateContactList: stateAdd => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(stateAdd),
					headers: {
						"Content-type": "application/json"
					}
				}).then(request => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_xii")
						.then(resp => {
							return resp.json();
						})
						.then(obj => {
							setStore({ contactlist: obj });
						});
				});
			},
			UpdateContactList: (stateAdd, id) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(stateAdd),
					headers: {
						"Content-type": "application/json"
					}
				}).then(request => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_xii")
						.then(resp => {
							return resp.json();
						})
						.then(obj => {
							setStore({ contactlist: obj });
						});
				});
			},
			DeleteContactList: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: {
						"Content-type": "application/json"
					}
				}).then(request => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_xii")
						.then(resp => {
							return resp.json();
						})
						.then(obj => {
							setStore({ contactlist: obj });
						});
				});
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
