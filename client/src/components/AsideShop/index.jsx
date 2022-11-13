import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AsideNav } from "../../constans";

const AsideItem = ({ active, item, ...props }) => {
	return (
		<button
			disabled={active}
			className={`${
				active ? "bg-lightblack text-lightwhite cursor-default" : ""
			} py-[7px] px-2 hover:bg-lightblack hover:text-lightwhite cursor-pointer`}
			{...props}
		>
			<li className="font-medium capitalize text-left">{item.name}</li>
		</button>
	);
};

export default AsideItem;
