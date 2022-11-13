import React from "react";
import { SaleBanner } from "../../components/";
import sl from "./pageItem.module.scss";
import { ShopBtn } from "../../components/UI";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneDecor, selectDecor, setDa } from "../../redux/features/decor";

const PageItem = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const { itemOne: item } = useSelector(selectDecor);

	useEffect(() => {
		dispatch(getOneDecor(params));
	}, []);

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
						<button
							onClick={() => dispatch()}
							className="text-left hover:text-lightred"
						>
							Add to cart
						</button>
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