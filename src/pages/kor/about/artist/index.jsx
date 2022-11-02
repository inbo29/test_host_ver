import React from "react";
import NavbarFullMenuKor from "../../../../components/Navbar-full-menu/navbar.full-menu-kor";
import DarkTheme from "../../../../layouts/Dark";
import Team2Kor2 from "../../../../components/Team2/team2-1kor";
// import Team2Kor2Two from "../../../../components/Team2/team2-1korTwo";
import FootKor from "../../../../components/Footer/footkor";


const Artists = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	return (
		<DarkTheme>
		<NavbarFullMenuKor />
		<Team2Kor2 />
		{/* <Team2Kor2Two /> */}
		<FootKor />
		</DarkTheme>
	);
};

export default Artists;




