import React from "react";
import Pastor from "./Pastor";





function Home() {
	return (
		<div className="container">
			<Pastor />
			<div className="bottompix">
				<img className="pictures" src="/assets/entrance.jpg" height={200} width={200} alt="Front Door"></img>
				<img className="pictures" src="/assets/prayerscreen.jpg" height={200} width={200} alt="prayer"></img>
				<img className="pictures" src="/assets/mainarea.jpg" height={200} width={200} alt="main"></img>
				<img className="pictures" src="/assets/mainarea2.jpg" height={200} width={200} alt="main2"></img>
			</div>
		</div>
	)
}

export default Home;