import React from "react";
import NavbarFullMenuKor from "../../../../../components/Navbar-full-menu/navbar.full-menu-kor";
import DarkTheme from "../../../../../layouts/Dark";
import FootKor from "../../../../../components/Footer/footkor";
import WorksStyleMinshikKor from "../../../../../components/Works-style2/works-style-minshik-kor";

const WorksDarkMinshik = () => {
	return (
		<DarkTheme>
		<div className="circle-bg">
			<div className="circle-color fixed">
			<div className="gradient-circle"></div>
			<div className="gradient-circle two"></div>
			</div>
		</div>
		<NavbarFullMenuKor />
		<div className="main-content">
			<WorksStyleMinshikKor grid={3} filterPosition="center" />
			<FootKor />
		</div>
		</DarkTheme>
	);
};

export default WorksDarkMinshik;