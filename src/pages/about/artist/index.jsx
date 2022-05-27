import React from "react";
import NavbarFullMenu from "../../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../../layouts/Dark";
import Team2Two from "../../../components/Team2/team2-1";
import Footer from "../../../components/Footer/footer";


const Artists = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	return (
		<DarkTheme>
		<NavbarFullMenu />
		<Team2Two />
		<Footer />
		</DarkTheme>
	);
};

export default Artists;




