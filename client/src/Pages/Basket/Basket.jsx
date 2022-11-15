import React from "react";
import sl from "./basket.module.scss";

import BasketItem from "./BasketItem";

const Basket = () => {
	return (
		<section className=" container middle__content mt-10">
			<h2 className={sl.title__basket}>Your Basket</h2>
			<div className="flex flex-col gap-3 items-center">
				<BasketItem />
				<BasketItem />
				<BasketItem />
				<BasketItem />
			</div>
		</section>
	);
};

export default Basket;
