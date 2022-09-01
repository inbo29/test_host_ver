import React from "react";
import blog2Data from "../../data/blog2.json";
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import BlogList from "../../components/Blog-list/blog-list";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import WorksStyleManiac from "../../components/Works-style1/works-style-maniac"

const BlogGridDark = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	
	return (
		<DarkTheme>
		<div className="circle-bg">
			<div className="circle-color fixed">
			<div className="gradient-circle"></div>
			<div className="gradient-circle two"></div>
			</div>
		</div>
		<NavbarFullMenu nr={navbarRef} lr={logoRef} />
		<PageHeader
			title="News"
		/>
		<BlogList blogs={blog2Data} />
		<WorksStyleManiac />
        <Footer hideBGCOLOR />
		</DarkTheme>
	);
};

export default BlogGridDark;
