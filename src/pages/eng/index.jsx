import React from "react";
import NavbarFullMenuEng from "../../components/Navbar-full-menu/navbar.full-menu-eng";
import ShowcasesFullScreenEng from "../../components/Showcases-full-screen/showcases-full-screen-eng";
import DarkTheme from "../../layouts/Dark";

const ShowcaseDark = () => {
	return (
		<DarkTheme>
		<NavbarFullMenuEng />
		<ShowcasesFullScreenEng />
		</DarkTheme>
	);
};

export default ShowcaseDark;
