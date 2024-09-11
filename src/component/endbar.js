import { React } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, Outlet } from "react-router-dom";

function EndBar() {
	return (
		<div className="end-div">
			<div className="end-sub-div">
				<div className="sub-div1">
					<strong>Explore</strong>
					<ul>
						<li>
							<a href="https://webflow.com/dashboard">
								Dashboard
							</a>
						</li>
						<li>
							<a href="https://webflow.com/marketplace">
								Marketplace
							</a>
						</li>
						<li>
							<a href="https://webflow.com/hire">
								Hire designers
							</a>
						</li>
					</ul>
				</div>
				<div className="sub-div1">
					<strong>Learn & get help</strong>
					<ul>
						<li>
							<a href="https://university.webflow.com/support">
								University
							</a>
						</li>
						<li>
							<a href="https://university.webflow.com/?utm_source=marketplace">
								Support
							</a>
						</li>
						<li>
							<a href="https://university.webflow.com/courses/?utm_source=marketplace">
								Courses
							</a>
						</li>
						<li>
							<a href="https://webflow.com/blog/?utm_source=marketplace">
								Blog
							</a>
						</li>
						<li>
							<a href="https://ebooks.webflow.com/">Ebooks</a>
						</li>
						<li>
							<a href="https://forum.webflow.com/">Forum</a>
						</li>
						<li>
							<a href="https://webflow.com/community/?utm_source=marketplace">
								Community
							</a>
						</li>
						<li>
							<a href="https://developers.webflow.com/?utm_source=marketplace">
								Developers
							</a>
						</li>
						<li>
							<a href="https://wishlist.webflow.com/?utm_source=marketplace">
								Wishlist
							</a>
						</li>
						<li>
							<a href="https://status.webflow.com/">Status</a>
						</li>
					</ul>
				</div>
				<div className="sub-div1">
					<div>
						<strong>Company</strong>
						<ul>
							<li>
								<a href="https://webflow.com/about">About</a>
							</li>
							<li>
								<a href="https://webflow.com/careers">
									Careers
								</a>
							</li>
							<li>
								<a href="https://webflow.com/sitemap">
									Sitemap
								</a>
							</li>
							<li>
								<a href="https://webflow.com/affiliates">
									Become an Affiliate
								</a>
							</li>
						</ul>
					</div>
					<div>
						<strong>Terms & policy</strong>
						<ul>
							<li>
								<a href="https://webflow.com/legal/terms">
									Terms of Service
								</a>
							</li>
							<li>
								<a href="https://webflow.com/legal/privacy">
									Privacy policy
								</a>
							</li>
							<li>
								<a href="https://webflow.com/legal/cookie-policy">
									Cookie policy
								</a>
							</li>
							<li>
								<a href="https://webflow.com/made-in-webflow/popular#">
									Cookie preferences
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="sub-div1">
					<div>
						<strong>Socials</strong>
						<ul>
							<li>
								<a href="https://webflow.com/made-in-webflow">
									<img
										src="https://assets.website-files.com/65e87f68dc636e71667a539c/668264eed2ed89c50f518b22_webflow-icon-black.svg"
										alt=""
										className="social-img"
									></img>
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/webflow">
									<YouTubeIcon />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/webflow">
									<XIcon />
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/webflow/">
									<FacebookIcon />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/webflow/">
									<InstagramIcon />
								</a>
							</li>
							<li>
								<a href="https://www.tiktok.com/@webflow">
									<img
										src="https://banner2.cleanpng.com/20240214/th/transparent-tiktok-logo-square-shape-empty-space-black-color-m-square-shape-with-empty-space-and-1710878548467.webp"
										alt=""
										className="social-img"
										style={{ paddingLeft: "1px" }}
									></img>
								</a>
							</li>
						</ul>
					</div>
					<div>
						<Link
							to="/contact"
							style={{
								color: "black",
								fontSize: "20px",
							}}
						>
							<strong>Contact Us</strong>
						</Link>
					</div>
					<Outlet />
				</div>
			</div>
			<div className="end-sub-div-resp">
				<div className="sub-div1">
					<strong>Explore</strong>
					<ul>
						<li>
							<a href="https://webflow.com/dashboard">
								Dashboard
							</a>
						</li>
						<li>
							<a href="https://webflow.com/marketplace">
								Marketplace
							</a>
						</li>
						<li>
							<a href="https://webflow.com/hire">
								Hire designers
							</a>
						</li>
					</ul>
				</div>
				<div className="sub-div1">
					<strong>Learn & get help</strong>
					<ul>
						<li>
							<a href="https://university.webflow.com/support">
								University
							</a>
						</li>
						<li>
							<a href="https://university.webflow.com/?utm_source=marketplace">
								Support
							</a>
						</li>
						<li>
							<a href="https://university.webflow.com/courses/?utm_source=marketplace">
								Courses
							</a>
						</li>
						<li>
							<a href="https://webflow.com/blog/?utm_source=marketplace">
								Blog
							</a>
						</li>
						<li>
							<a href="https://ebooks.webflow.com/">Ebooks</a>
						</li>
						<li>
							<a href="https://forum.webflow.com/">Forum</a>
						</li>
						<li>
							<a href="https://webflow.com/community/?utm_source=marketplace">
								Community
							</a>
						</li>
						<li>
							<a href="https://developers.webflow.com/?utm_source=marketplace">
								Developers
							</a>
						</li>
						<li>
							<a href="https://wishlist.webflow.com/?utm_source=marketplace">
								Wishlist
							</a>
						</li>
						<li>
							<a href="https://status.webflow.com/">Status</a>
						</li>
					</ul>
				</div>
				<div className="sub-div1">
					<div>
						<strong>Company</strong>
						<ul>
							<li>
								<a href="https://webflow.com/about">About</a>
							</li>
							<li>
								<a href="https://webflow.com/careers">
									Careers
								</a>
							</li>
							<li>
								<a href="https://webflow.com/sitemap">
									Sitemap
								</a>
							</li>
							<li>
								<a href="https://webflow.com/affiliates">
									Become an Affiliate
								</a>
							</li>
						</ul>
					</div>
					<div>
						<strong>Terms & policy</strong>
						<ul>
							<li>
								<a href="https://webflow.com/legal/terms">
									Terms of Service
								</a>
							</li>
							<li>
								<a href="https://webflow.com/legal/privacy">
									Privacy policy
								</a>
							</li>
							<li>
								<a href="https://webflow.com/legal/cookie-policy">
									Cookie policy
								</a>
							</li>
							<li>
								<a href="https://webflow.com/made-in-webflow/popular#">
									Cookie preferences
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="sub-div1">
					<div>
						<strong>Socials</strong>
						<ul className="sub-div1-flex">
							<li>
								<a href="https://webflow.com/made-in-webflow">
									<img
										src="https://assets.website-files.com/65e87f68dc636e71667a539c/668264eed2ed89c50f518b22_webflow-icon-black.svg"
										alt=""
										className="social-img"
									></img>
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/webflow">
									<YouTubeIcon />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/webflow">
									<XIcon />
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/webflow/">
									<FacebookIcon />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/webflow/">
									<InstagramIcon />
								</a>
							</li>
							<li>
								<a href="https://www.tiktok.com/@webflow">
									<img
										src="https://banner2.cleanpng.com/20240214/th/transparent-tiktok-logo-square-shape-empty-space-black-color-m-square-shape-with-empty-space-and-1710878548467.webp"
										alt=""
										className="social-img"
										style={{ paddingLeft: "1px" }}
									></img>
								</a>
							</li>
						</ul>
					</div>
					<div>
						<Link
							to="/contact"
							style={{
								color: "black",
								fontSize: "20px",
							}}
						>
							<strong>Contact Us</strong>
						</Link>
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default EndBar;
