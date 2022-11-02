import React from "react";
import NavbarFullMenuKor from "../../../components/Navbar-full-menu/navbar.full-menu-kor";
import PagesHeaderKor from "../../../components/Pages-header/headkor";
import DarkTheme from "../../../layouts/Dark";
import Team2Kor from "../../../components/Team2/team2kor";
import Team2KorTwo from "../../../components/Team2/team2korTwo";
import FooterKor from "../../../components/Footer/footkor";



const KorAbout = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	return (
		<DarkTheme>
		<NavbarFullMenuKor nr={navbarRef} lr={logoRef} />
		<PagesHeaderKor />
		<Team2Kor />
		{/* <Team2KorTwo /> */}
		<FooterKor hideBGCOLOR />
		</DarkTheme>
	);
};

export default KorAbout;




