import React, { Fragment } from "react";




function Header() {
	return (
		<Fragment>
			<div className="container-fluid  bg-light">
				<div className="row">
					<div className="col-2">
						<img src="/assets/logo.png" height={200} width={200} alt="logo " />
						<p className="pt-3">727 Fairview Dr Suite B/C <br />
							Carson City, NV 89702 <br />
						</p>
					</div>
					<div className="col mt-5 text-black">
						<h1 className="text-center">The Potter's House Christian Fellowship</h1>
						<p className="text-center">"We are a Bible believing Pentecostal Christian church. We believe and preach salvation through repentance of sins and acceptance of Jesus Christ as your Lord and Savior"</p>
						<nav>
							<ul className="nav pt-5 justify-content-center">
								<li className="nav-link">
									<button>Home</button>
								</li>
								<li className="nav-link">
									<button>Events</button>
								</li>
								<li className="nav-link">
									<button>Contact</button>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-1 ml-3 text-black">
						<h3>Service Times:</h3>
						<h5>Sunday</h5>
						<p>11 AM and 6 PM</p>
						<h5>Wednesday</h5>
						<p>7 PM</p>
					</div>
					
				</div>
			</div>

		</Fragment>
	)
}


export default Header; 