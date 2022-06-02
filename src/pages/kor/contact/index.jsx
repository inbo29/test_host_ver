/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import NavbarFullMenuKor from "../../../components/Navbar-full-menu/navbar.full-menu-kor";
import FootKor from "../../../components/Footer/footkor";
import DarkTheme from "../../../layouts/Dark";
import ContactHeader from "../../../components/Contact-header/contact-header";

const Contact = () => {
	const navbarRef = React.useRef(null);

	React.useEffect(() => {
		document.querySelector("body").classList.add("contact-page");
		return () => {
		document.querySelector("body").classList.remove("contact-page");
		};
	}, [navbarRef]);

	return (
		<DarkTheme>
		<NavbarFullMenuKor />
		<ContactHeader />
		<div className="main-content">
			<div className="map" id="ieatmaps">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3200961844723!2d127.03327751249539!3d37.50036788959205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3fe6ecb7267%3A0x589e20a95279fcf2!2z64yA7ZWc66-86rWtIOyEnOyauO2KueuzhOyLnCDqsJXrgqjqtawg7YWM7Zek656A66GcIDE0NyA5MDftmLg!5e0!3m2!1sko!2smn!4v1652346004346!5m2!1sko!2smn"
				loading="lazy"
			></iframe>
			</div>

			<FootKor hideBGCOLOR />
		</div>
		</DarkTheme>
	);
};

export default Contact;
