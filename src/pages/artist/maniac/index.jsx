import React from "react";
import DarkTheme from "../../../layouts/Dark";
import NavbarFullMenu from "../../../components/Navbar-full-menu/navbar.full-menu";
import Footer from "../../../components/Footer/footer";
import WorksHeader from "../../../components/Works-header/works-header";
import WorksStyle2 from "../../../components/Works-style2/works-style2";

const WorksDark = () => {
	

	return (
		<DarkTheme>
		<div className="circle-bg">
			<div className="circle-color fixed">
			<div className="gradient-circle"></div>
			<div className="gradient-circle two"></div>
			</div>
		</div>
		<NavbarFullMenu />
		<WorksHeader />
		<div className="main-content">
			<WorksStyle2 grid={3} filterPosition="center" />
			<Footer />
		</div>
		</DarkTheme>
	);
};

export default WorksDark;
