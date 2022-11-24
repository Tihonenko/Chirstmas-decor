import React, { useEffect } from "react";
import sl from "./christmasDecor.module.scss";
import { AsideItem, SaleBanner, ShopItem } from "../../components/";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllDecor,
	selectDecor,
	setSelectedDecor
} from "../../redux/features/decor/";
import {
	getAllTypes,
	selectTypes
} from "../../redux/features/typesDecor/typesSlice";
import { Circular } from "../../components/UI";
import { useSearchParams } from "react-router-dom";

const ChristmasDecor = () => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();

	const {
		isLoading,
		item: decor,
		setSelectDecorTypeId,
		setSelectDecorType,
		setSelectedLimit
	} = useSelector(selectDecor);
	const { item: types, setSelectType } = useSelector(selectTypes);

	useEffect(() => {
		dispatch(
			getAllDecor({
				typesId: setSelectDecorTypeId,
				limit: setSelectedLimit
			})
		);
		setSearchParams({
			typesId: setSelectDecorTypeId,
			limit: setSelectedLimit
		});
		dispatch(getAllTypes());
		// dispatch(filter())
	}, [setSelectDecorTypeId, setSelectedLimit]);

	if (types.isLoading) {
		return <Circular />;
	}

	return (
		<section className="middle__content">
			<SaleBanner className={`mb-5`} />
			<div className="container flex flex-auto gap-10 mt-10 md:gap-2">
				<ul className={sl.aside__list}>
					{types?.map(item => (
						<AsideItem
							active={item._id === setSelectDecorTypeId}
							item={item}
							key={item._id}
							onClick={() => dispatch(setSelectedDecor(item))}
						/>
					))}
				</ul>
				{isLoading ? (
					<Circular />
				) : (
					<div className="h-full flex flex-col flex-auto md:items-center md:w-[300px]">
						<h2 className="text-lg md:text-center md:w-[300px] ">
							Christmas {setSelectDecorType?.name || "Lighting"}
						</h2>

						<div className="mt-7 flex flex-1 gap-10 xl:gap-4 md:flex-wrap md:justify-center md:w-[300px]">
							{decor?.map(item => (
								<ShopItem item={item} key={item._id} />
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default ChristmasDecor;
