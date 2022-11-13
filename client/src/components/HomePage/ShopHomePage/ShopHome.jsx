import React from "react";
import { Link } from "react-router-dom";
import { dataShopHome } from "../../../constans";
import sl from "./shophome.module.scss";

const ShopHome = () => {
	return (
		<div className="container flex flex-1 gap-6 mt-10">
			{dataShopHome.map((obj, idx) => (
				<Link href={obj.link} key={`shop item ${idx}`} className="text-center">
					<img
						src={obj.img}
						alt={obj.title}
						className="cursor-pointer hover:brightness-95"
					/>
					<h3 className={`${sl.shop__text} a-hover inline`}>{obj.title}</h3>
				</Link>
			))}
		</div>
	);
};

export default ShopHome;
