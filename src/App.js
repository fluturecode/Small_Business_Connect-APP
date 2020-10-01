import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Listings from "./components/Listings";
import Footer from "./components/Footer.js";

function App() {
	return (
		<div className='app'>
			<Nav />
			<Search />
			<Listings />
			<Footer />
		</div>
	);
}

export default App;
