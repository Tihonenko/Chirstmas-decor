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
		<div className="middle__content">
			<SaleBanner className={`mb-5`} />
			<div className="container flex gap-10 mt-10">
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
					<div className="h-full flex-auto">
						<h2 className="text-lg">
							Christmas {setSelectDecorType?.name || "Lighting"}
						</h2>

						<div className="mt-7 flex gap-10 flex-wrap xl:gap-4">
							{decor?.map(item => (
								<ShopItem item={item} key={item._id} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ChristmasDecor;
