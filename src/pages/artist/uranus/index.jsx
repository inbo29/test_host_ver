import React from "react";
import DarkTheme from "../../../layouts/Dark";
import NavbarFullMenu from "../../../components/Navbar-full-menu/navbar.full-menu";
import Footer from "../../../components/Footer/footer";
import WorksStyleUranus from "../../../components/Works-style2/works-style-uranus";
import ArtheadUranus from "../../../components/custom-arthead/arthead-uranus"

const WorksDarkUranus = () => {
	

	return (
		<DarkTheme>
		<div className="circle-bg">
			<div className="circle-color fixed">
			<div className="gradient-circle"></div>
			<div className="gradient-circle two"></div>
			</div>
		</div>
		<NavbarFullMenu />
		
		<div className="main-content">
			<ArtheadUranus />
			<WorksStyleUranus grid={3} filterPosition="center" />
			<Footer />
		</div>
		</DarkTheme>
	);
};

export default WorksDarkUranus;
