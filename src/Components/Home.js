import React from "react";
import Pastor from "./Pastor";




function Home() {
	return (

		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<Pastor/>
					<h2>Wife's Story</h2>
					<p>My name is Brooke Perez. My husband is the pastor at the Potter's House Church in South Carson City on Fairview Dr. i got saved when I was 14 years old. MY parents were saved before I was born and my dad became a pastor in Seattle, when i was 2 years old. I was raised in a happy and healthy home, that was blessed by God. Even thought I had seen how living in sin destroyed lives, I had yet to experience it. When I was 12, my family became missionaries to Zambia. This was the beginning of my personal spiritual journey. I got the full realization that I needed my own personal relationship with Jesus when I was 14. At the age of 18, I left Zambia and went to UNR. I was excited to serve God on my own; and make my own way to church rather than go simply because there was no other option. I had high expectations, but the devil had tactics I was not prepared for. I was soon disappointed, and at the age of 21, I told God that i didn't believe that He could make me happy. I almost immediately began to fall into sin. In the next 3 moths I experienced a life without the covering of God and quicly realized that it was not worthit. I rededicated my life to Jesus and I have benn serving Him ever since. Living for God's expectations greatly exceeded any expectations I could have had for myself.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="bottompix fluid">
					<img className="pictures" src="/assets/entrance.jpg" height={200} width={200} alt="Front Door"></img>
					<img className="pictures" src="/assets/prayerscreen.jpg" height={200} width={200} alt="prayer"></img>
					<img className="pictures" src="/assets/mainarea.jpg" height={200} width={200} alt="main"></img>
					<img className="pictures" src="/assets/mainarea2.jpg" height={200} width={200} alt="main2"></img>
				</div>
			</div>
		</div>


	)
}

export default Home;