import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Contextdata } from "../store/appContext";
import PropTypes from "prop-types";

export const AddContact = props => {
	const { store, actions } = useContext(Contextdata);
	const [stateadd, setstateadd] = useState({
		full_name: "",
		email: "",
		agenda_slug: "downtown_xii",
		address: "",
		phone: ""
	});
	const namechange = e => {
		setstateadd(Object.assign(stateadd, { full_name: e.target.value }));
	};
	const emailchange = e => {
		setstateadd(Object.assign(stateadd, { email: e.target.value }));
	};
	const phonechange = e => {
		setstateadd(Object.assign(stateadd, { phone: e.target.value }));
	};
	const addresschange = e => {
		setstateadd(Object.assign(stateadd, { address: e.target.value }));
	};
	useEffect(() => {
		if (props.match.params.id != undefined) {
			const updatedarray = store.contactlist.filter(e => {
				return props.match.params.id == e.id;
			});
			setstateadd(updatedarray[0]);
		}
	});
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							defaultValue={stateadd.full_name}
							onChange={namechange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							defaultValue={stateadd.email}
							onChange={emailchange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							defaultValue={stateadd.phone}
							onChange={phonechange}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							defaultValue={stateadd.address}
							onChange={addresschange}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							if (props.match.params.id != undefined) {
								actions.UpdateContactList(stateadd, props.match.params.id);
							} else {
								actions.CreateContactList(stateadd);
							}
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
AddContact.propTypes = {
	match: PropTypes.object
};
