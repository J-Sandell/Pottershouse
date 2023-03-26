import React from "react";



function Contact() {
	return (
		<div>
			<div className="contact text-center m-3">
				<div className="">
					<img className="map" src="/assets/map.png" height={400} width={400} alt="place" />
					<h1>Location:</h1>
					<h4>
						727 Fairview Dr St B/C <br />
						Carson City, NV 89702
					</h4>
				</div>
			</div>
			<div className="bottompix m-3">
				<img className="pictures" src="/assets/entrance.jpg" height={200} width={200} alt="Front Door"></img>
				<img className="pictures" src="/assets/prayerscreen.jpg" height={200} width={200} alt="prayer"></img>
				<img className="pictures" src="/assets/mainarea.jpg" height={200} width={200} alt="main"></img>
				<img className="pictures" src="/assets/mainarea2.jpg" height={200} width={200} alt="main2"></img>
			</div>

		</div>

	)
}

export default Contact;