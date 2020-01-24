const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contactlist: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			GetContactList: () => {
				fetch("https://3000-f360355a-a143-4167-83ae-554ca4b7df40.ws-us02.gitpod.io/get")
					.then(resp => {
						return resp.json();
					})
					.then(obj => {
						setStore({ contactlist: obj });
					});
			},
			CreateContactList: stateAdd => {
				fetch("https://3000-f360355a-a143-4167-83ae-554ca4b7df40.ws-us02.gitpod.io/create", {
					method: "POST",
					body: JSON.stringify(stateAdd),
					headers: {
						"Content-type": "application/json"
					}
				}).then(request => {
					fetch("https://3000-f360355a-a143-4167-83ae-554ca4b7df40.ws-us02.gitpod.io/get")
						.then(resp => {
							return resp.json();
						})
						.then(obj => {
							setStore({ contactlist: obj });
						});
				});
			},
			UpdateContactList: (stateAdd, id) => {
				fetch("https://3000-f360355a-a143-4167-83ae-554ca4b7df40.ws-us02.gitpod.io/update" + id, {
					method: "PUT",
					body: JSON.stringify(stateAdd),
					headers: {
						"Content-type": "application/json"
					}
				}).then(request => {
					fetch("https://3000-f360355a-a143-4167-83ae-554ca4b7df40.ws-us02.gitpod.io/get")
						.then(resp => {
							return resp.json();
						})
						.then(obj => {
							setStore({ contactlist: obj });
						});
				});
			},
			DeleteContactList: id => {
				fetch("https://3000-f360355a-a143-4167-83ae-554ca4b7df40.ws-us02.gitpod.io/delete" + id, {
					method: "DELETE",
					headers: {
						"Content-type": "application/json"
					}
				}).then(request => {
					fetch("https://3000-f360355a-a143-4167-83ae-554ca4b7df40.ws-us02.gitpod.io/get")
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
