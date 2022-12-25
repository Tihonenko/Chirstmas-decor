import React from "react";
import { Link } from "react-router-dom";

const NavImg = ({ to, src }) => {
	return (
		<li>
			<Link to={to}>
				<img src={src} alt={`user`} />
			</Link>
		</li>
	);
};

export default NavImg;
