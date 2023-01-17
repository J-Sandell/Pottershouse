import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Header() {
	return (
		<div>
			<div className="container-fluid">
				<div className="row head">
					<div className="col">
						<img src="/assets/logo2.webp" height={200} width={200} alt="logo " />
						<p>
							727 Fairview Dr Suite B/C
							Carson City, NV 89702
						</p>
					</div>
					<div className="col">
						<h1>The Potter's House Christian Fellowship</h1>
						<p>"We are a Bible believing Pentecostal Christian church. We believe and preach salvation through repentance of sins and acceptance of Jesus Christ as your Lord and Savior"</p>
					</div>
					<div className="col">
						<h3>Service Times:</h3>
						<h5>Sunday</h5>
						<p>11 AM and 6 PM</p>
						<h5>Wednesday</h5>
						<p>7 PM</p>
						<button className="donate btn" >Give</button>
					</div>
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
		</div >
	)
}

export default Header;