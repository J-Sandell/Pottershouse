import React from "react";
import { Link } from "react-router-dom";


function Footer() {

	return (

		<footer>
			<div className="container-fluid">
				<div className="row">
					<div className="col footer-site">
						<ul className="list-unstyled">
							<h3>Links</h3>
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
						<ul>
							<h3>Social</h3>
							<i className="bi bi-facebook">Facebook</i><br />
							<i className="bi bi-instagram">Instagram</i>
						</ul>
						<ul>
							<h3>Contact</h3>
							<i className="bi bi-envelope-heart">Email</i><br />
							<i className="bi bi-geo-fill">Location</i>
						</ul>
					</div>
				</div>
			</div>
		</footer>

	)
}


export default Footer;