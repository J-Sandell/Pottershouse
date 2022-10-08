import React from "react";
import { Link } from "react-router-dom";
function Footer() {

	return (
		<footer>
			<div className='container-fluid position-bottom bg-light text-black'>
				<div className='row offset-1'>
					<div className='col'>
						<h3>links</h3>
						<ul className='list-unstyled'>
							<Link to="/">
								<li>Home</li>
							</Link>
							<Link to="/event">
								<li>Events</li>
							</Link>
							<Link to="/contact">
								<li>Contact</li>
							</Link>
						</ul>
					</div>
					<div className='col'>
						<h3>Social</h3>
						<ul className='list-unstyled'>
							<li>Facebook</li>
							<li>Instagram</li>
						</ul>
					</div>
					<div className='col'>
						<h3>Contact</h3>
						<ul className='list-unstyled'>
							<li>Email</li>
							<li>Location</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>

	)
}


export default Footer;