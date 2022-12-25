import React from "react";
import { SaleBanner } from "../../components";
import sl from "./christmasDecor.module.scss";
import { Circular, ShopBtn } from "../../components/UI";
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getOneDecor,
	removeDecor,
	selectDecor
} from "../../redux/features/decor";
import { addDecorItem } from "../../redux/features/basket/basket";
import { selectIsAuth } from "../../redux/features/authSlice";
import { toast } from "react-toastify";

const PageItem = ({ getOne }) => {
	const isAuth = useSelector(selectIsAuth);
	const params = useParams();
	const dispatch = useDispatch();
	const { itemOne: item, isLoading } = useSelector(selectDecor);

	useEffect(() => {
		dispatch(getOneDecor(params));
	}, []);

	const removeHandler = () => {
		try {
			dispatch(removeDecor(params));
			toast("Post remove");
			// navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	if (isLoading) {
		return <Circular />;
	}

	return (
		<>
			<SaleBanner />
			<section className="middle__content container">
				<div className={sl.page}>
					<div className="max-h-[500px]">
						<img
							src={`${process.env.REACT_APP_API_URL}/${item.img}`}
							alt={item.title}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className={sl.page__content}>
						<div className="flex justify-between">
							<button
								onClick={() => dispatch(addDecorItem(item))}
								className="text-left hover:text-lightred"
							>
								Add to cart
							</button>
							{isAuth && (
								<button onClick={removeHandler} className="hover:text-lightred">
									Remove
								</button>
							)}
						</div>
						<h2>{item?.title}</h2>
						<h4>Desciption</h4>
						<p className={sl.description_text}>{item?.description}</p>
						<div className={sl.footer_item}>
							<span>{item?.price}</span>
							<ShopBtn className="rounded-btn">Shop</ShopBtn>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PageItem;
