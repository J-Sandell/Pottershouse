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

				</div>
			</div>

		</Fragment>
	)
}


export default Header; 