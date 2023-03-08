import React from "react";



function Contact() {
	return (

		<div className="contact text-center mb-5">
			<div className="">
				<img className="map" src="/assets/map.png" height={400} width={400} alt="place" />
				<h1>Location:</h1>
				<h4>
					727 Fairview Dr St B/C <br />
					Carson City, NV 89702
				</h4>
			</div>
			<div>
				<h2 className="text-center">Let us hear from you</h2>
				<label for="email" className="form-label">Email address</label>
				<input type="email" className="form-control" id="email" placeholder="emailus@emailus.com"></input>
				<label for="emailwriting" className="form-label">Write us here</label>
				<textarea className="form-control" id="emailwriting" rows={8}></textarea>
				<button className="btn btn-primary">Submit</button>
			</div>
		</div>

	)
}

export default Contact;