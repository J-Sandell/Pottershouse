import React from "react";


function Contact() {
	return (
		<div className="text-center">
			<h1>Location</h1>
			<img src="/assets/map.png" height={500} width={500} alt="place" />
			<h4>
				727 Fairview Dr St B/C <br/>
				Carson City, NV 89702
			</h4>
			<p>
				Service times:
				Sunday 11 AM and 6 PM
				Wednesday 7 PM
			</p>
			<p>Email:</p>
		</div>
	)
}

export default Contact;