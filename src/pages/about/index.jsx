import React from "react";
import blog3Data from "../../data/blog3.json";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import PagesHeader from "../../components/Pages-header/index";
import DarkTheme from "../../layouts/Dark";
import Team2 from "../../components/Team2/team2";
import Team2Two from "../../components/Team2/team2Two";
import Footer from "../../components/Footer/footer";
import MyCalendar from "../../components/Event-calendar/cuscalnedar";
import Sample from "../../components/Event-calendar/sample"



const About = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	return (
		<DarkTheme>
		<NavbarFullMenu nr={navbarRef} lr={logoRef} />
		<PagesHeader />
		<Team2 />
		{/* <Team2Two /> */}
		{/* <MyCalendar /> */}
		{/* <Sample /> */}
			{/* <CusAboutBlogGrid blogs={blog3Data} /> */}
		{/* <CalendarGfg /> */}
		<Footer hideBGCOLOR />
		</DarkTheme>
	);
};

export default About;




