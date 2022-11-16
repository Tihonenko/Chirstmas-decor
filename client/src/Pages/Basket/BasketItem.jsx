import React from "react";
import sl from "./basket.module.scss";
import { Lighting1, close } from "../../img";
import { Link } from "react-router-dom";
import { ShopBtn } from "../../components/UI";

const BasketItem = item => {
	const { title, price, img } = item.item;

	return (
		<div className={sl.basket__card}>
			<div className="basis-1/3 max-h-40">
				<img
					src={`${process.env.REACT_APP_API_URL}/${img}`}
					alt="11"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="basis-2/3 flex flex-col justify-between">
				<div className="flex justify-between items-start">
					<h3 className="basis-1/2 text-base">{title}</h3>
					<Link>
						<svg
							width="16"
							height="16"
							viewBox="0 0 22 23"
							fill="none"
							className="fill-lightblack hover:fill-lightred cursor-pointer transition-colors duration-200 delay-75"
						>
							<path d="M2.93332 22.0054L0.916656 19.9888L8.98332 11.9221L0.916656 3.85544L2.93332 1.83878L11 9.90544L19.0667 1.83878L21.0833 3.85544L13.0167 11.9221L21.0833 19.9888L19.0667 22.0054L11 13.9388L2.93332 22.0054Z" />
						</svg>
					</Link>
				</div>
				<div className="flex justify-between">
					<span className="inline-block  font-semibold text-base">{price}</span>
					<ShopBtn className="rounded-btn">Buy</ShopBtn>
				</div>
			</div>
		</div>
	);
};

export default BasketItem;
