import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import Event from "./Event";
import { Route, Routes } from 'react-router-dom';



function Main() {
	return (
		<div className="main">
			<Header />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/event" element={<Event />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>


	)
}

export default Main;