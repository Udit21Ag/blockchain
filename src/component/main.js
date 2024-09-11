import React from "react";
import "./topbar.css";
import "./display.css";
import "./endbar.css";
import TopBar from "./topbar";
import Display from "./display";
import EndBar from "./endbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./contact";

function Main() {
	return (
		<BrowserRouter>
			<div style={{ maxWidth: "100%" }}>
				<TopBar />
				<Routes>
					<Route exact path="/" element={<Display />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
				<EndBar />
			</div>
		</BrowserRouter>
	);
}

export default Main;
