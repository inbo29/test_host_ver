import React from "react";
import DarkTheme from "../../../../../layouts/Dark";
import NavbarFullMenuEng from "../../../../../components/Navbar-full-menu/navbar.full-menu-eng";
import Footer from "../../../../../components/Footer/footer";
import WorksStyleUranus from "../../../../../components/Works-style2/works-style-uranus";

const WorksDarkUranus = () => {
	return (
		<DarkTheme>
		<div className="circle-bg">
			<div className="circle-color fixed">
			<div className="gradient-circle"></div>
			<div className="gradient-circle two"></div>
			</div>
		</div>
		<NavbarFullMenuEng />
		<div className="main-content">
			<WorksStyleUranus grid={3} filterPosition="center" />
			<Footer />
		</div>
		</DarkTheme>
	);
};

export default WorksDarkUranus;
