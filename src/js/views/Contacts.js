import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Contextdata } from "../store/appContext";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		idtomodel: ""
	});
	const { store, actions } = useContext(Contextdata);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{/* <ContactCard onDelete={() => setState({ showModal: true })} /> */}
						{store.contactlist.map(item => {
							return (
								<ContactCard
									key={item.id}
									unique={item.id}
									onDelete={idfordeletion => {
										setState({ showModal: true, idtomodel: idfordeletion });
									}}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} newone={state.idtomodel} />
		</div>
	);
};
