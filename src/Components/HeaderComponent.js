import React, { Fragment } from "react";



function Header() {
	return (
		<Fragment>
			<div className="container-fluid bg-light">
				<div className="row" fluid>
					<div className="col">
						<img src="/assets/logo.png" height={150} width={150} alt="logo" />
					</div>
					<div className="col-10">
						<h1>The Potter's House Christian Fellowship</h1>
						<div>
							<p>727 Fairview Dr Suite B/C</p>
							<p>Carson City, NV 89702</p>
							<p>CarsonCityPottersHouse@gmail.com</p>
						</div>
					</div>
				</div>
			</div>

		</Fragment>
	)
}


export default Header; 