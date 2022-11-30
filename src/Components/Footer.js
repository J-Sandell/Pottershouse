import React from "react";
import { Link } from "react-router-dom";


function Footer() {

	return (

		<div className='footer container-fluid bg-light text-black'>
			<Link to="/">
				<i className="bi bi-house-fill">Home</i>
			</Link>
			<br />
			<Link to="/event">
				<i className="bi bi-calendar-event-fill">Events</i>
			</Link>
			<br />
			<Link to="/contact">
				<i className="bi bi-person-rolodex">Contact</i>
			</Link>
			<i className="bi bi-facebook">Facebook</i><br />
			<i className="bi bi-instagram">Instagram</i>
			<i className="bi bi-envelope-heart">Email</i><br />
			<i className="bi bi-geo-fill">Location</i>
		</div>

	)
}


export default Footer;