import React from "react";
import DarkTheme from "../../../../layouts/Dark";
import NavbarFullMenu from "../../../../components/Navbar-full-menu/navbar.full-menu";
import Footer from "../../../../components/Footer/footer";
import WorksStyleBayc from "../../../../components/Works-style2/works-style-bayc";

const WorksDarkBayc = () => {
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
			<WorksStyleBayc grid={3} filterPosition="center" />
			<Footer />
		</div>
		</DarkTheme>
	);
};

export default WorksDarkBayc;
