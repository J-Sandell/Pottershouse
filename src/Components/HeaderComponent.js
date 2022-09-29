import React, { Fragment } from "react";



function Header() {
	return (
		<Fragment>
			<div className="container-fluid bg-dark">
				<div className="row">
					<div className="col-2">
						<img src="/assets/logo.png" height={200} width={200} alt="logo" />
					</div>
					<div className="col text-black">
						<h1 className="mt-4">The Potter's House Christian Fellowship</h1>
						<p className="pt-3">727 Fairview Dr Suite B/C <br />
							Carson City, NV 89702 <br />
							<button>CarsonCityPottersHouse@gmail.com</button>
						</p>
					</div>
					<div className="col-2 m-2 text-black">
						<h3>Service Times:</h3>
						<h5>Sunday</h5>
						<p>11 AM and 6 PM</p>
						<h5>Wednesday</h5>
						<p>7 PM</p>
					</div>
					<nav>

					</nav>
				</div>
			</div>

		</Fragment>
	)
}


export default Header; 