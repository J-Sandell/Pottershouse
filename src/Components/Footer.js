import React from "react";
import { Link } from "react-router-dom";


function Footer() {

	return (

		<footer>
			<div className="container">
				<div className="row">
					<div className="col">
						<h5>Links</h5>
						<ul className="list-unstyled">
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
						</ul>
						<div className="col">
							<h5>Socials</h5>
							<i className="bi bi-facebook">Facebook</i><br />
							<i className="bi bi-instagram">Instagram</i>
						</div>
						<div className="col">
							<h5>Contacts</h5>
							<i className="bi bi-envelope-heart">Email</i><br />
							<i className="bi bi-geo-fill">Location</i>
						</div>
					</div>
				</div>
			</div>
		</footer>

	)
}


export default Footer;