import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { ModalDecor, ModalShop, TypeModal } from "../../components/";
import { useDispatch, useSelector } from "react-redux";
import { createTypeDecor } from "../../redux/features/typesDecor/typesSlice";
import { selectIsAdmin } from "../../redux/features/authSlice";
import { Circular } from "../../components/UI";
import { createDecor } from "../../redux/features/decor";
import { createShopTypes } from "../../redux/features/shopType/shopTypeSlice";
import AdminButton from "./adminButton";
import { createShop } from "../../redux/features/shop/shopSlice";

const AdminPage = () => {
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);
	const isAdmin = useSelector(selectIsAdmin);

	const [shopModalActive, setShopModalActive] = useState(false);
	const [decorModalActive, setDecorModalActive] = useState(false);
	const [typesActive, setTypesActive] = useState(false);
	const [typesShopActive, setTypesShopActive] = useState(false);

	if (isLoading) {
		return <Circular />;
	}

	if (isAdmin === "USER" || isAdmin === undefined) {
		return <Navigate to="/" />;
	}

	return (
		<div className="container middle__content mt-10">
			<div className="flex flex-col gap-5">
				<AdminButton onClick={() => setDecorModalActive(true)}>
					Create Decor
				</AdminButton>
				<AdminButton onClick={() => setShopModalActive(true)}>
					Create Shop
				</AdminButton>
				<AdminButton onClick={() => setTypesActive(true)}>
					Create Decor Types
				</AdminButton>
				<AdminButton onClick={() => setTypesShopActive(true)}>
					Create Shop Types
				</AdminButton>
			</div>
			<ModalDecor
				createItem={createDecor}
				active={decorModalActive}
				setActive={setDecorModalActive}
			/>
			<ModalShop
				createItem={createShop}
				active={shopModalActive}
				setActive={setShopModalActive}
			/>
			<TypeModal
				createType={createTypeDecor}
				nameModal="Create Decor Type"
				active={typesActive}
				setActive={setTypesActive}
			/>
			<TypeModal
				createType={createShopTypes}
				nameModal="Create Shop Type"
				active={typesShopActive}
				setActive={setTypesShopActive}
			/>
		</div>
	);
};

export default AdminPage;
