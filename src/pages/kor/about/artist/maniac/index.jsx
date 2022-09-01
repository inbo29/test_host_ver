import React from "react";
import DarkTheme from "../../../../../layouts/Dark";
import NavbarFullMenuKor from "../../../../../components/Navbar-full-menu/navbar.full-menu-kor";
import FootKor from "../../../../../components/Footer/footkor";
import WorksStyle2Kor from "../../../../../components/Works-style2/works-style2-kor";
// import WorksStyleManiac from "../../../../../components/Works-style1/works-style-maniac"

const WorksDark = () => {
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
			<WorksStyle2Kor grid={3} filterPosition="center"/>
			{/* <WorksStyleManiac /> */}
			<FootKor />
		</div>
		</DarkTheme>
	);
};

export default WorksDark;
