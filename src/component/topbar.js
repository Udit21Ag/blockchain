import React, { useState } from "react";

import { Button, MenuItem, Menu } from "@mui/material";

import { ProdPopup, MktPopup, RscsPopup } from "../data/popup";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function TopBar() {
	const [anchorElProd, setAnchorElProd] = useState(null);
	const [anchorElMkt, setAnchorElMkt] = useState(null);
	const [anchorElRscs, setAnchorElRscs] = useState(null);
	const openProd = Boolean(anchorElProd);
	const openMkt = Boolean(anchorElMkt);
	const openRscs = Boolean(anchorElRscs);
	const [disp, setDisp] = useState(true);
	const [prodMenu, setProdMenu] = useState(true);
	const [MktMenu, setMktMenu] = useState(true);
	const [RscsMenu, setRscsMenu] = useState(true);

	const handleRemove = () => {
		if (disp) {
			setDisp(false);
		} else {
			setDisp(true);
		}
	};

	const handleProdClick = (event) => {
		setAnchorElProd(event.currentTarget);
	};
	const handleMktClick = (event) => {
		setAnchorElMkt(event.currentTarget);
	};
	const handleRscsClick = (event) => {
		setAnchorElRscs(event.currentTarget);
	};

	const handleProdClose = () => {
		setAnchorElProd(null);
	};
	const handleMktClose = () => {
		setAnchorElMkt(null);
	};
	const handleRscsClose = () => {
		setAnchorElRscs(null);
	};

	const handleProdMenuClick = () => {
		if (prodMenu) {
			setProdMenu(false);
		} else {
			setProdMenu(true);
		}
	};
	const handleMktMenuClick = () => {
		if (MktMenu) {
			setMktMenu(false);
		} else {
			setMktMenu(true);
		}
	};
	const handleRscsMenuClick = () => {
		if (RscsMenu) {
			setRscsMenu(false);
		} else {
			setRscsMenu(true);
		}
	};

	return (
		<nav className="heading">
			<section className="topitems">
				<div className="inside-elem">
					<div className="logo">
						<a href="https://webflow.com/?r=0">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.3334 4L11.2916 12H7.49528L9.18675 8.68446H9.11086C7.7154 10.5186 5.63335 11.726 2.66675 12V8.73034C2.66675 8.73034 4.56456 8.61685 5.68023 7.42922H2.66675V4.00006H6.05357V6.8205L6.12959 6.82018L7.51356 4.00006H10.0749V6.80261L10.151 6.80249L11.5869 4H15.3334Z"
									fill="currentColor"
								></path>
							</svg>
						</a>
					</div>
					<div className="bar-elem">
						<div className="items">
							<button
								onClick={handleProdClick}
								className="nav-buttons"
							>
								Product
								<span className="arrow">
									<i
										className={`fas fa-chevron-${
											openProd ? "up" : "down"
										}`}
									/>
								</span>
							</button>
							<Menu
								anchorEl={anchorElProd}
								open={openProd}
								onClose={handleProdClose}
								slotProps={{
									paper: {
										style: {
											maxHeight: "none",
										},
									},
								}}
							>
								{ProdPopup.map((item, index) => (
									<MenuItem
										key={index}
										onClick={handleProdClose}
									>
										<a
											href={item.link}
											className="dd-itemLink"
										>
											{item.label}
										</a>
									</MenuItem>
								))}
							</Menu>
							<button
								onClick={handleMktClick}
								className="nav-buttons"
							>
								Marketplace
								<span className="arrow">
									<i
										className={`fas fa-chevron-${
											openMkt ? "up" : "down"
										}`}
									/>
								</span>
							</button>
							<Menu
								anchorEl={anchorElMkt}
								open={openMkt}
								onClose={handleMktClose}
								slotProps={{
									paper: {
										style: {
											maxHeight: "none",
										},
									},
								}}
							>
								{MktPopup.map((item, index) => (
									<MenuItem
										key={index}
										onClick={handleMktClose}
									>
										<a
											href={item.link}
											className="dd-itemLink"
										>
											{item.label}
										</a>
									</MenuItem>
								))}
							</Menu>
							<div className="topbar-learn">
								<a
									href="https://university.webflow.com/?utm_source=marketplace"
									className="dd-itemLink learn-link"
								>
									Learn
								</a>
							</div>
							<button
								onClick={handleRscsClick}
								className="nav-buttons"
							>
								Resources
								<span className="arrow">
									<i
										className={`fas fa-chevron-${
											openRscs ? "up" : "down"
										}`}
									/>
								</span>
							</button>
							<Menu
								anchorEl={anchorElRscs}
								open={openRscs}
								onClose={handleRscsClose}
								slotProps={{
									paper: {
										style: {
											maxHeight: "none",
										},
									},
								}}
							>
								{RscsPopup.map((item, index) => (
									<MenuItem
										key={index}
										onClick={handleRscsClose}
										className="menu-style"
									>
										<a
											href={item.link}
											className="dd-itemLink"
										>
											{item.label}
										</a>
									</MenuItem>
								))}
							</Menu>
						</div>
					</div>
				</div>
				<div className="inside-elem">
					<Button className="btn-style">
						<a
							href="https://webflow.com/dashboard/login?r=/made-in-webflow/popular"
							className="text"
						>
							Login
						</a>
					</Button>
					<Button className="btn-style">
						<a
							href="https://webflow.com/contact-sales"
							className="text"
						>
							Contact Sales
						</a>
					</Button>
					<Button
						className="btn-style"
						style={{ backgroundColor: "#145EF5" }}
					>
						<a
							href="https://webflow.com/dashboard/signup"
							className="text start"
						>
							<strong>Get Started</strong> - it's free
						</a>
					</Button>
				</div>
			</section>
			<section className="topitems-resp">
				<div className="menu-flex">
					<div className="inside-elem">
						<div className="logo">
							<a href="https://webflow.com/?r=0">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.3334 4L11.2916 12H7.49528L9.18675 8.68446H9.11086C7.7154 10.5186 5.63335 11.726 2.66675 12V8.73034C2.66675 8.73034 4.56456 8.61685 5.68023 7.42922H2.66675V4.00006H6.05357V6.8205L6.12959 6.82018L7.51356 4.00006H10.0749V6.80261L10.151 6.80249L11.5869 4H15.3334Z"
										fill="currentColor"
									></path>
								</svg>
							</a>
						</div>
					</div>
					<div className="inside-elem" onClick={handleRemove}>
						<div
							hidden={!disp}
							style={{
								paddingRight: "10px",
							}}
						>
							<MenuIcon />
						</div>
						<div
							hidden={disp}
							style={{
								paddingRight: "10px",
							}}
						>
							<CloseIcon />
						</div>
					</div>
				</div>
				<div hidden={disp}>
					<div className="menu-item" onClick={handleProdMenuClick}>
						Product
						<span className="arrow">
							<i
								className={`fas fa-chevron-${
									prodMenu ? "down" : "up"
								}`}
							/>
						</span>
					</div>
					<div hidden={prodMenu}>
						{ProdPopup.map((item, index) => (
							<div key={index} className="inside-menu">
								<a href={item.link} className="menu-link">
									{item.label}
								</a>
							</div>
						))}
					</div>
					<div className="menu-item" onClick={handleMktMenuClick}>
						Marketplace
						<span className="arrow">
							<i
								className={`fas fa-chevron-${
									MktMenu ? "down" : "up"
								}`}
							/>
						</span>
					</div>
					<div hidden={MktMenu}>
						{MktPopup.map((item, index) => (
							<div key={index} className="inside-menu">
								<a href={item.link} className="menu-link">
									{item.label}
								</a>
							</div>
						))}
					</div>
					<div className="menu-item">Learn</div>
					<div className="menu-item" onClick={handleRscsMenuClick}>
						Resources
						<span className="arrow">
							<i
								className={`fas fa-chevron-${
									RscsMenu ? "down" : "up"
								}`}
							/>
						</span>
					</div>
					<div hidden={RscsMenu}>
						{RscsPopup.map((item, index) => (
							<div key={index} className="inside-menu">
								<a href={item.link} className="menu-link">
									{item.label}
								</a>
							</div>
						))}
					</div>
					<div className="menu-other-item">
						<Button variant="outlined" color="inherit" fullWidth>
							<a
								href="https://webflow.com/dashboard/login?r=/made-in-webflow/popular"
								className="other-menu-link"
							>
								Login
							</a>
						</Button>
					</div>
					<div className="menu-other-item">
						<Button variant="outlined" color="inherit" fullWidth>
							<a
								href="https://webflow.com/contact-sales"
								className="other-menu-link"
							>
								Contact Sales
							</a>
						</Button>
					</div>
					<div className="menu-other-item">
						<Button variant="contained" color="primary" fullWidth>
							<a
								href="https://webflow.com/dashboard/signup"
								className="other-menu-link"
								style={{
									color: "white",
								}}
							>
								<strong>Get started</strong> - it's free
							</a>
						</Button>
					</div>
				</div>
			</section>
		</nav>
	);
}

export default TopBar;
