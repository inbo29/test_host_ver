import React from "react";
import blog3Data from "../../data/blog3.json";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import PagesHeader from "../../components/Pages-header/index";
import DarkTheme from "../../layouts/Dark";
import Team2 from "../../components/Team2/team2";
import EventCalendarTest from "../../components/Event-calendar/event-calendar-test";
import Footer from "../../components/Footer/footer";


const About = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	return (
		<DarkTheme>
		<NavbarFullMenu nr={navbarRef} lr={logoRef} />
		<PagesHeader />
		<Team2 />
		<EventCalendarTest />
			{/* <CusAboutBlogGrid blogs={blog3Data} /> */}
		{/* <CalendarGfg /> */}
		<Footer hideBGCOLOR />
		</DarkTheme>
	);
};

export default About;




