import React, { Fragment } from "react";



function Header() {
	return (
		<Fragment>
			<div className="container-fluid bg-dark">
				<div className="row">
					<div className="col-2">
						<img src="/assets/logo.png" height={200} width={200} alt="logo" />
					</div>
					<div className="col text-white">
						<h1 className="mt-4">The Potter's House Christian Fellowship</h1>
						<p className="pt-3">727 Fairview Dr Suite B/C <br />
							Carson City, NV 89702 <br />
							<button>CarsonCityPottersHouse@gmail.com</button>
						</p>
					</div>
					<div className="col-2 text-white">
						<h2>Service Times:</h2>
						<h4>Sunday</h4>
						<p>11 AM and 6 PM</p>
						<h4>Wednesday</h4>
						<p>7 PM</p>
					</div>
				</div>
			</div>

		</Fragment>
	)
}


export default Header; 