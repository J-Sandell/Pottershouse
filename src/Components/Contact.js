import React, { Fragment } from "react";



function Contact() {
	return (
		<Fragment>
			<div className="d-flex inline">
				<div className="card">
					<img className="map" src="/assets/map.png" height={500} width={500} alt="place" />
					<div className="card-body text-center">
						<h1>Location:</h1>
						<h4>
							727 Fairview Dr St B/C <br />
							Carson City, NV 89702
						</h4>
						<p>
							Service times:
							Sunday 11 AM and 6 PM
							Wednesday 7 PM
						</p>
					</div>
				</div>
				<div className="card">
					<h2 className="text-center">Let us hear from you</h2>
					<div className="card-body">
						<label for="email" className="form-label">Email address</label>
						<input type="email" className="form-control" id="email" placeholder="emailus@emailus.com"></input>
						<label for="emailwriting" className="form-label">Write us here</label>
						<textarea className="form-control" id="emailwriting" rows={8}></textarea>
						<button className="btn btn-primary">Submit</button>
					</div>

				</div>
			</div>
		</Fragment>
	)
}

export default Contact;