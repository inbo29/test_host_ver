/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ContactHeader from "../../components/Contact-header/contact-header";

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
		<NavbarFullMenu />
		<ContactHeader />
		<div className="main-content">
			<div className="map" id="ieatmaps">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9940283154806!2d126.90992675109993!3d37.55520447970088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98d866070e3d%3A0x4881eab5968cb383!2z64yA7ZWc66-86rWtIOyEnOyauO2KueuzhOyLnCDrp4jtj6zqtawg7JuU65Oc7Lu166GcMTLquLggMjA!5e0!3m2!1sko!2smn!4v1673401920840!5m2!1sko!2smn"
				loading="lazy"
			></iframe>
			</div>

			<Footer hideBGCOLOR />
		</div>
		</DarkTheme>
	);
};

export default Contact;
