import { Button, Dialog, DialogTitle } from "@mui/material";
import { React, useState } from "react";
import "./contact.css";
import { Close } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link, Outlet } from "react-router-dom";

function Contact() {
	const [contactPopup, setContactPopup] = useState(false);
	const handleContactPopup = () => {
		setContactPopup(true);
	};
	const handleClose = () => {
		setContactPopup(false);
	};
	return (
		<div className="contact-body">
			<div className="contact-div">
				<Button
					variant="outlined"
					onClick={handleContactPopup}
					style={{
						padding: "10px 20px",
					}}
				>
					Developer
				</Button>
				<Dialog fullWidth open={contactPopup} onClose={handleClose}>
					<DialogTitle className="popup">
						<div>
							Homepage clone of{" "}
							<a
								href="https://webflow.com/made-in-webflow"
								className="contact-link"
							>
								Webflow
							</a>{" "}
							made by Udit Agarwal
						</div>
						<Close onClick={handleClose} />
					</DialogTitle>
				</Dialog>
			</div>
			<div>
				<Link to="/">
					<Button
						variant="outlined"
						style={{
							padding: "10px 20px",
						}}
					>
						<ArrowBackIosNewIcon color="primary" fontSize="sm" /> Go
						Back
					</Button>
				</Link>
			</div>
			<Outlet />
		</div>
	);
}

export default Contact;
