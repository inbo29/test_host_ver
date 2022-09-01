import React from "react";
import DarkTheme from "../../../../../layouts/Dark";
import NavbarFullMenuEng from "../../../../../components/Navbar-full-menu/navbar.full-menu-eng";
import Footer from "../../../../../components/Footer/footer";
import WorksStyle2 from "../../../../../components/Works-style2/works-style2";
import WorksStyleOriginal from "../../../../../components/Works-style2/works-style-original";
import WorksStyleManiac from "../../../../../components/Works-style1/works-style-maniac"

const WorksDark = () => {
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
			<WorksStyle2 grid={3} filterPosition="center"/>
			{/* <WorksStyleOriginal grid={3} filterPosition="center"/> */}
			{/* <WorksStyleManiac /> */}
			<Footer />
		</div>
		</DarkTheme>
	);
};

export default WorksDark;
