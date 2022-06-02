import React from "react";
import NavbarFullMenuKor from "../../components/Navbar-full-menu/navbar.full-menu-kor";
import ShowcasesFullScreenKor from "../../components/Showcases-full-screen/showcases-full-screen-kor";
import DarkTheme from "../../layouts/Dark";

const ShowcaseDark = () => {
	return (
		<DarkTheme>
		<NavbarFullMenuKor />
		<ShowcasesFullScreenKor />
		</DarkTheme>
	);
};

export default ShowcaseDark;
