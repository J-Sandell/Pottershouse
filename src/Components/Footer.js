import React from "react";
import { Link } from "react-router-dom";


function Footer() {

	return (
		<footer>
			<div className='container-fluid position-bottom bg-light text-black'>
				<div className='row offset-1'>
					<div className='col'>
						<h3>links</h3>
						<Link to="/">
							<i className="bi bi-house-fill"></i>
						</Link>
						<br />
						<Link to="/event">
							<i className="bi bi-calendar-event-fill"></i>
						</Link>
						<br />
						<Link to="/contact">
							<i className="bi bi-person-rolodex"></i>
						</Link>
					</div>
					<div className='col'>
						<h3>Social</h3>
						<i className="bi bi-facebook"></i><br />
						<i className="bi bi-instagram"></i>
					</div>
					<div className='col'>
						<h3>Contact</h3>
						<i className="bi bi-envelope-heart"></i><br />
						<i className="bi bi-geo-fill"></i>

					</div>
				</div>
			</div>
		</footer>

	)
}


export default Footer;