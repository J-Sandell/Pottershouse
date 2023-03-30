import React from "react";


const src = "https://www.youtube.com/watch?v=3f1A-iUKCqw";

const Video = () => {
	return (
		<iframe
			width="500"
			height="300"
			src={src}
			title="Youtube Player"
			allowFullScreen
		/>
	);

};

export default Video;