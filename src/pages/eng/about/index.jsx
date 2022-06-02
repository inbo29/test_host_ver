import React from "react";
import NavbarFullMenuEng from "../../../components/Navbar-full-menu/navbar.full-menu-eng";
import PagesHeader from "../../../components/Pages-header/index";
import DarkTheme from "../../../layouts/Dark";
import Team2eng from "../../../components/Team2/team2eng";
import Footer from "../../../components/Footer/footer";



const About = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	return (
		<DarkTheme>
		<NavbarFullMenuEng nr={navbarRef} lr={logoRef} />
		<PagesHeader />
		<Team2eng />
		<Footer hideBGCOLOR />
		</DarkTheme>
	);
};

export default About;




