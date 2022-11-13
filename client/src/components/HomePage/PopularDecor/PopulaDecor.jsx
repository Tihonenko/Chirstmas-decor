import React from "react";
import sl from "./popularDecor.module.scss";
import { ShopBtn } from "../../UI";
import { dataPopular } from "../../../constans";
import { useSelector } from "react-redux";
import { selectDecor } from "../../../redux/features/decor";

const PopularDecor = () => {
	const { setSelectDecorType } = useSelector(selectDecor);

	return (
		<div className="bg-lightwhite mt-10 pt-[10px] pb-5 snap-center">
			<div className="container">
				<h1 className="block text-center font-medium text-lg">
					Christmas Popular Decor
				</h1>
				<p className="text-center text-base mt-4 mb-8">
					We offer a large selection of Christmas ribbons, <br /> flowers,
					sprays and more.
				</p>
			</div>
			<div className="containerCorusel overflow-hidden">
				<div className={`${sl.corusel__content} scroll`}>
					{dataPopular.map((obj, idx) => (
						<div
							key={`popular item ${idx}`}
							className=" bg-white block min-w-[343px] shadow-lg snap-end"
						>
							<div className="h-[10px] w-full bg-lightblack"> </div>
							<div className="px-3 pb-3">
								<div></div>
								<div>
									<span className="text-base font-medium">{obj.title}</span>
									<p>{obj.body}</p>
								</div>
								<div className="mb-3 overflow-hidden touch-auto">
									<img
										src={obj.img}
										alt={obj.title}
										className="w-[319px] h-[246px] object-cover hover:scale-110 transition duration-200"
									/>
								</div>
								<div className="flex justify-center">
									<ShopBtn to={`/ChristmasDecor?typesId=${setSelectDecorType}`}>
										SHOP
									</ShopBtn>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PopularDecor;
