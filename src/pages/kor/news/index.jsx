import React from "react";
import blog2kor from "../../../data/blog2kor.json";
import DarkTheme from "../../../layouts/Dark";
import NavbarFullMenuKor from "../../../components/Navbar-full-menu/navbar.full-menu-kor";
import BlogListKor from "../../../components/Blog-list/blog-list-kor";
import PageHeaderKor from "../../../components/Page-header/page-header-kor";
import FootKor from "../../../components/Footer/footkor";

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
		<NavbarFullMenuKor nr={navbarRef} lr={logoRef} />
		<PageHeaderKor
			title="뉴스"
		/>
		<BlogListKor blogs={blog2kor} />
        <FootKor hideBGCOLOR />
		</DarkTheme>
	);
};

export default BlogGridDark;
