import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => {
	return (
		<li>
			<Link to={to} className="a-hover text-base font-medium relative">
				{children}
			</Link>
		</li>
	);
};

export default NavItem;
