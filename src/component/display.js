import { React, useState } from "react";
import { GridPopup } from "../data/popup";

import {
	Button,
	TextField,
	MenuItem,
	Select,
	Link,
	Switch,
	Checkbox,
	Dialog,
	DialogContent,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EastIcon from "@mui/icons-material/East";
import StorefrontIcon from "@mui/icons-material/Storefront";

function Display() {
	const [searchValue, setSearchValue] = useState("");
	const [selectedValue, setSelectedValue] = useState("default");
	const [checked, setChecked] = useState(false);
	const [gridPopup0, setGridPopup0] = useState(false);
	const [gridPopup1, setGridPopup1] = useState(false);
	const [gridPopup2, setGridPopup2] = useState(false);

	const handleValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleFilterChange = (event) => {
		setSelectedValue(event.target.value);
	};

	const handleCheckChange = () => {
		if (!checked) {
			setChecked(true);
		} else {
			setChecked(false);
		}
	};

	const handleGridPopup0 = (elem) => {
		setGridPopup0(true);
	};
	const handleGridPopup1 = (elem) => {
		setGridPopup1(true);
	};
	const handleGridPopup2 = (elem) => {
		setGridPopup2(true);
	};

	const handleClose = () => {
		setGridPopup0(false);
		setGridPopup1(false);
		setGridPopup2(false);
	};

	return (
		<main className="main-body">
			<div className="main-div">
				<div className="div-top">
					<div className="sub-div-top">
						<Button
							variant="outlined"
							style={{
								padding: "5px 2px",
								borderColor: "lightgray",
								marginBottom: "15px",
								maxWidth: "fit-content",
							}}
						>
							<a
								href="https://webflow.com/made-in-webflow"
								className="text"
							>
								<span className="main-info-btn">
									<img
										src="https://assets.website-files.com/65e87f68dc636e71667a539c/667bfae829f75ed433514ace_webflow-icon-blue.svg"
										style={{
											maxHeight: "30px",
											maxWidth: "35px",
											paddingRight: "5px",
										}}
										alt=""
									></img>
									Made in webflow
								</span>
							</a>
						</Button>
						<div>
							<div
								style={{
									gap: "24px 8px",
									height: "auto",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<h1 className="main-heading">
									Discover{" "}
									{searchValue ? (
										<span className="edit">
											{searchValue}
										</span>
									) : (
										"inspiring"
									)}{" "}
									websites
									<br />
									built by the Webflow community
								</h1>
								<h2 className="main-sub-heading">
									Browse, clone, and customize thousands of
									websites #MadeinWebflow.
									<a
										target="_blank"
										rel="noreferrer"
										href="https://webflow.com/templates"
										className="heading-link"
									>
										Looking for templates?
									</a>
								</h2>
							</div>
						</div>
					</div>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<TextField
							placeholder="Search"
							className="search-bar"
							value={searchValue}
							onChange={handleValueChange}
							style={{
								maxWidth: "80%",
							}}
						></TextField>
					</div>
					<div className="heading-btn-div">
						<Button
							variant="outlined"
							style={{
								display: "inline-flex",
								position: "relative",
								backgroundColor: "rgba(0,0,0,0.05)",
							}}
						>
							<a
								className="heading-btn"
								href="https://webflow.com/made-in-webflow/popular"
							>
								All
							</a>
						</Button>
						<Button
							style={{
								display: "inline-flex",
								position: "relative",
								backgroundColor: "rgba(0,0,0,0.05)",
							}}
						>
							<a
								className="heading-btn"
								href="https://webflow.com/made-in-webflow/animation/popular"
							>
								Animation
							</a>
						</Button>
						<Button
							style={{
								display: "inline-flex",
								position: "relative",
								backgroundColor: "rgba(0,0,0,0.05)",
							}}
						>
							<a
								className="heading-btn"
								href="https://webflow.com/made-in-webflow/interactions/popular"
							>
								Interactions
							</a>
						</Button>
						<Button
							style={{
								display: "inline-flex",
								position: "relative",
								backgroundColor: "rgba(0,0,0,0.05)",
							}}
						>
							<a
								className="heading-btn"
								href="https://webflow.com/made-in-webflow/cms/popular"
							>
								CMS
							</a>
						</Button>
						<Button
							style={{
								display: "inline-flex",
								position: "relative",
								backgroundColor: "rgba(0,0,0,0.05)",
							}}
						>
							<a
								className="heading-btn"
								href="https://webflow.com/made-in-webflow/ecommerce/popular"
							>
								Ecommerce
							</a>
						</Button>
						<Button
							style={{
								display: "inline-flex",
								position: "relative",
								backgroundColor: "rgba(0,0,0,0.05)",
							}}
						>
							<a
								className="heading-btn"
								href="https://webflow.com/made-in-webflow/portfolio/popular"
							>
								Portfolio
							</a>
						</Button>
					</div>
				</div>
				<div className="body">
					<div className="body-sub">
						<div className="body-sub-div">
							<div style={{ padding: "5px 10px" }}>
								<Select
									value={selectedValue}
									onChange={handleFilterChange}
									displayEmpty
									style={{
										maxHeight: "40px",
									}}
								>
									<Link
										href="https://webflow.com/made-in-webflow/popular"
										style={{
											color: "black",
											textDecoration: "none",
										}}
										value="default"
									>
										<MenuItem>Popular</MenuItem>
									</Link>
									<MenuItem
										value="next"
										hrefLang="https://webflow.com/made-in-webflow/recent"
									>
										Recent
									</MenuItem>
									<Link
										href="https://webflow.com/made-in-webflow/likes"
										style={{
											color: "black",
											textDecoration: "none",
										}}
										value="last"
									>
										<MenuItem>Most Liked</MenuItem>
									</Link>
								</Select>
							</div>
							<div style={{ padding: "5px 10px" }}>
								<Button
									variant="outlined"
									style={{
										marginLeft: "5px",
										maxHeight: "40px",
										borderColor: "lightgray",
									}}
								>
									<Switch
										checked={checked}
										onChange={handleCheckChange}
										onClick={() => {
											window.location.href = `https://webflow.com/made-in-webflow?cloneable=${checked}`;
										}}
									/>
									<span
										style={{
											color: "black",
											textTransform: "capitalize",
											paddingRight: "5px",
										}}
									>
										Cloneable sites only
									</span>
									<HelpOutlineIcon
										color="action"
										titleAccess="Cloneable sites can be copied, modified, and used for personal or commercial purposes."
									/>
								</Button>
							</div>
						</div>
						<div style={{ padding: "5px 10px" }}>
							<Link href="https://webflow.com/made-in-webflow/add">
								<Button
									variant="contained"
									style={{ textTransform: "capitalize" }}
								>
									Showcase your site
								</Button>
							</Link>
						</div>
					</div>
					<div className="main-content">
						<div className="content-grid">
							<div
								className="grid-items"
								onClick={handleGridPopup0}
							>
								<div className="grid-link">
									<div className="container">
										<img
											src={GridPopup[0].link}
											className="grid-img"
											alt=""
										></img>
										<div className="info">
											<span
												style={{
													paddingRight: "10px",
												}}
											>
												View details
											</span>
											<EastIcon fontSize="small" />
										</div>
									</div>
									<div className="grid-elem-info">
										<div>
											<div
												style={{
													paddingBottom: "5px",
												}}
											>
												<strong>
													{GridPopup[0].highLabel}
												</strong>
											</div>
											<div>{GridPopup[0].lowLabel}</div>
										</div>
										<Checkbox
											icon={<FavoriteBorder />}
											checkedIcon={
												<Favorite color="error" />
											}
										/>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth="md"
								open={gridPopup0}
								onClose={handleClose}
							>
								<DialogContent>
									<div>
										<div className="popup-item">
											<div
												style={{
													padding: "5px",
												}}
											>
												<StorefrontIcon color="primary" />
											</div>
											<div
												style={{
													padding: "5px",
												}}
											>
												<a
													href="https://webflow.com/made-in-webflow"
													className="popup-link"
												>
													Made in Webflow
												</a>
											</div>
										</div>
										<div className="popup-item-ex">
											<div className="popup-subitem">
												<div className="popup-label-high">
													{GridPopup[0].highLabel}
												</div>
												<div className="popup-label-low">
													{GridPopup[0].lowLabel}
												</div>
											</div>
											<div className="popup-item">
												<div>
													<Checkbox
														icon={
															<FavoriteBorder />
														}
														checkedIcon={
															<Favorite color="error" />
														}
													/>
												</div>
												<div
													style={{
														display: "block",
													}}
												>
													<a href="https://webflow.com/templates">
														<Button variant="contained">
															Search similar
															templates
														</Button>
													</a>
												</div>
											</div>
										</div>
										<div>
											<img
												src={GridPopup[0].link}
												alt=""
												style={{
													width: "100%",
												}}
											></img>
										</div>
									</div>
								</DialogContent>
							</Dialog>
							<div
								className="grid-items"
								onClick={handleGridPopup1}
							>
								<div className="grid-link">
									<div className="container">
										<img
											src={GridPopup[1].link}
											className="grid-img"
											alt=""
										></img>
										<div className="info">
											<span
												style={{
													paddingRight: "10px",
												}}
											>
												View details
											</span>
											<EastIcon fontSize="small" />
										</div>
									</div>
									<div className="grid-elem-info">
										<div>
											<div
												style={{
													paddingBottom: "5px",
												}}
											>
												<strong>
													{GridPopup[1].highLabel}
												</strong>
											</div>
											<div>{GridPopup[1].lowLabel}</div>
										</div>
										<Checkbox
											icon={<FavoriteBorder />}
											checkedIcon={
												<Favorite color="error" />
											}
										/>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth="md"
								open={gridPopup1}
								onClose={handleClose}
							>
								<DialogContent>
									<div>
										<div className="popup-item">
											<div
												style={{
													padding: "5px",
												}}
											>
												<StorefrontIcon color="primary" />
											</div>
											<div
												style={{
													padding: "5px",
												}}
											>
												<a
													href="https://webflow.com/made-in-webflow"
													className="popup-link"
												>
													Made in Webflow
												</a>
											</div>
										</div>
										<div className="popup-item-ex">
											<div className="popup-subitem">
												<div className="popup-label-high">
													{GridPopup[1].highLabel}
												</div>
												<div className="popup-label-low">
													{GridPopup[1].lowLabel}
												</div>
											</div>
											<div className="popup-item">
												<div>
													<Checkbox
														icon={
															<FavoriteBorder />
														}
														checkedIcon={
															<Favorite color="error" />
														}
													/>
												</div>
												<div
													style={{
														display: "block",
													}}
												>
													<a href="https://webflow.com/templates">
														<Button variant="contained">
															Search similar
															templates
														</Button>
													</a>
												</div>
											</div>
										</div>
										<div>
											<img
												src={GridPopup[1].link}
												alt=""
												style={{
													width: "100%",
												}}
											></img>
										</div>
									</div>
								</DialogContent>
							</Dialog>
							<div
								className="grid-items"
								onClick={handleGridPopup2}
							>
								<div className="grid-link">
									<div className="container">
										<img
											src={GridPopup[2].link}
											className="grid-img"
											alt=""
										></img>
										<div className="info">
											<span
												style={{
													paddingRight: "10px",
												}}
											>
												View details
											</span>
											<EastIcon fontSize="small" />
										</div>
									</div>
									<div className="grid-elem-info">
										<div>
											<div
												style={{
													paddingBottom: "5px",
												}}
											>
												<strong>
													{GridPopup[2].highLabel}
												</strong>
											</div>
											<div>{GridPopup[2].lowLabel}</div>
										</div>
										<Checkbox
											icon={<FavoriteBorder />}
											checkedIcon={
												<Favorite color="error" />
											}
										/>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth="md"
								open={gridPopup2}
								onClose={handleClose}
							>
								<DialogContent>
									<div>
										<div className="popup-item">
											<div
												style={{
													padding: "5px",
												}}
											>
												<StorefrontIcon color="primary" />
											</div>
											<div
												style={{
													padding: "5px",
												}}
											>
												<a
													href="https://webflow.com/made-in-webflow"
													className="popup-link"
												>
													Made in Webflow
												</a>
											</div>
										</div>
										<div className="popup-item-ex">
											<div className="popup-subitem">
												<div className="popup-label-high">
													{GridPopup[2].highLabel}
												</div>
												<div className="popup-label-low">
													{GridPopup[2].lowLabel}
												</div>
											</div>
											<div className="popup-item">
												<div>
													<Checkbox
														icon={
															<FavoriteBorder />
														}
														checkedIcon={
															<Favorite color="error" />
														}
													/>
												</div>
												<div
													style={{
														display: "block",
													}}
												>
													<a href="https://webflow.com/templates">
														<Button variant="contained">
															Search similar
															templates
														</Button>
													</a>
												</div>
											</div>
										</div>
										<div>
											<img
												src={GridPopup[2].link}
												alt=""
												style={{
													width: "100%",
												}}
											></img>
										</div>
									</div>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Display;
