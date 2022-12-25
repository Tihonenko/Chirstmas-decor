import React, { useEffect } from "react";
import sl from "./shop.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AsideItem, SaleBanner, ShopItem } from "../../components";
import {
	getAllShop,
	selectShopType
} from "../../redux/features/shop/shopSlice";
import { Circular } from "../../components/UI";
import { Link, Navigate, Route, useSearchParams } from "react-router-dom";

const Shop = () => {
	const dispatch = useDispatch();

	// Получаем из redux state типы
	const { item: types } = useSelector(state => state.shopType);
	const {
		item: shop,
		isLoading,
		setSelectShopType,
		setSelectShopTypeId
	} = useSelector(state => state.shop);

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		dispatch(
			getAllShop({
				shopTypeId: setSelectShopTypeId
			})
		);
		// Передаем параметры в поисковую строку
		setSearchParams({
			shopType: setSelectShopTypeId
		});
	}, [setSelectShopTypeId]);

	return (
		<section className="middle__content">
			<SaleBanner className={`mb-5`} />
			<div className="container mt-4">
				<Link to="/">Home</Link>
				<div className="flex flex-auto gap-10 mt-6 md:gap-2 md:flex-col">
					<ul className={sl.aside__list}>
						{/* Выводим боковое меню, если оно есть */}
						{types?.map(item => (
							<AsideItem
								active={item._id === setSelectShopTypeId}
								item={item}
								key={item._id}
								onClick={() => dispatch(selectShopType(item))}
							/>
						))}
					</ul>
					{isLoading ? (
						<Circular />
					) : (
						<div className="h-full flex flex-col flex-auto ">
							<h2 className="text-lg md:text-center smd:text-3xl capitalize">
								{setSelectShopType?.name || "Candies"}
							</h2>

							<div className="mt-7 flex flex-1 gap-10 xl:gap-4 smd:flex-wrap smd:justify-center">
								{/* Выводим элементы магазина */}
								{shop?.map(item => (
									<ShopItem item={item} key={item._id} />
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Shop;
