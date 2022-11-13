import React from "react";
import { Link } from "react-router-dom";

const ShopItem = ({ item }) => {
	return (
		<>
			<div className="flex flex-col basis-60 items-center lg:basis-[300px] ">
				<div className="mb-2 w-full ">
					<img
						src={`${process.env.REACT_APP_API_URL}/${item.img}`}
						alt={item.title}
						className="h-[343px] w-full object-fill"
					/>
				</div>
				<div className="flex flex-col gap-1 items-center pb-2">
					<Link
						to={item._id}
						className="a-hover text-center font-medium text-base leading-7"
					>
						{item.title}
					</Link>
					<span>{item.price}</span>
				</div>
			</div>
		</>
	);
};

export default ShopItem;
