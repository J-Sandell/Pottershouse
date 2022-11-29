import React from "react";
import { Link } from "react-router-dom";


function Footer() {

	return (

		<div className='container-fluid bg-light text-black'>
			<div className='row offset-1'>
				<div className='col'>
					<h3>links</h3>
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
				</div>
				<div className='col'>
					<h3>Social</h3>
					<i className="bi bi-facebook">Facebook</i><br />
					<i className="bi bi-instagram">Instagram</i>
				</div>
				<div className='col'>
					<h3>Contact</h3>
					<i className="bi bi-envelope-heart">Email</i><br />
					<i className="bi bi-geo-fill">Location</i>

				</div>
			</div>
		</div>


	)
}


export default Footer;