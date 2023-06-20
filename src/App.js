import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";



function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/services" Component={Services} />
					<Route path="/products" Component={Products} />
					<Route path="/sign-up" Component={SignUp} />
				</Routes>
				<Footer/>
			</Router>
		</>
	);
}

export default App;
