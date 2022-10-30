import React, { Fragment } from "react";
import { Link } from "react-router-dom";




function Head() {
	return (
		<Fragment>
			<div className="container-fluid bg-dark">
				<div className="row text-center text-white">
					<div className="family col-2">
						<img className="" src="/assets/logo2.webp" height={400} width={400} alt="logo " /><br />
						<p>727 Fairview Dr Suite B/C <br />
							Carson City, NV 89702 <br />
						</p>
					</div>
					<div className="col-8">
						<h1>The Potter's House Christian Fellowship</h1>
						<p>"We are a Bible believing Pentecostal Christian church. We believe and preach salvation through repentance of sins and acceptance of Jesus Christ as your Lord and Savior"</p>
					</div>
					<div className="family col-2">
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
			</div>



		</Fragment>
	)
}


export default Head; 