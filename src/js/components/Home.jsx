import React from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import Card from "./card";
import Footer from "./footer";



//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
            
			<Navbar/>
			<Banner/>
			<Card/>
			<Footer/>
			
		</>
	);
};

export default Home;