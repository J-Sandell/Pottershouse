import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Header() {
	return (
		<Fragment>
			<div className="container-fluid d-flex inline">
				<div>
					<img className="family" src="/assets/logo2.webp" height={100} width={100} alt="logo " />
					<h1>The Potter's House Christian Fellowship</h1>
				</div>
				<div className="d-flex justify-content-end">
					<h3>Service Times:</h3>
					<h5>Sunday</h5>
					<p>11 AM and 6 PM</p>
					<h5>Wednesday</h5>
					<p>7 PM</p>
				</div>
			</div>
			<div className="d-flex justify-content-end ">
				<ul className="nav">
					<Link to="/">
						<li>
							<button className="link">Home</button>
						</li>
					</Link>
					<Link to="/event">
						<li>
							<button className="link">Event</button>
						</li>
					</Link>
					<Link to="/contact">
						<li>
							<button className="link">Contact</button>
						</li>
					</Link>
				</ul>

			</div>




		</Fragment >
	)
}

export default Header;