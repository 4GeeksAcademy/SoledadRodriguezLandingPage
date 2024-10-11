import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="container">
				<div className="row">
					<div className="col">
						<Card/>
					</div>
					<div className="col">
						<Card/>
					</div>
					<div className="col">
						<Card/>
					</div>
					<div className="col">
						<Card/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
