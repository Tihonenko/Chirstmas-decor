import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { selectIsAuth } from "../../redux/features/authSlice";
import { getBasket } from "../../redux/features/basket/basket";
import sl from "./basket.module.scss";

import BasketItem from "./BasketItem";

const Basket = () => {
	const isAuth = useSelector(selectIsAuth);
	const { item: basket } = useSelector(state => state.basket);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBasket());
	}, []);

	if (!isAuth) {
		return toast.error("Please authorization"), (<Navigate to="/register" />);
	}

	return (
		<section className=" container middle__content mt-10">
			<h2 className={sl.title__basket}>Your Basket</h2>
			<div className="flex flex-col gap-3 items-center">
				{basket?.map(item => (
					<BasketItem key={item._id} item={item} />
				))}
			</div>
		</section>
	);
};

export default Basket;
