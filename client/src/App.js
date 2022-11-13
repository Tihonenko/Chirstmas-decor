import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import {
	AdminPage,
	ChristmasDecor,
	HomePage,
	Login,
	Register,
	RetroDecoration,
	Shop,
	User,
	PageItem,
	Basket
} from "./Pages";
import { Layout } from "./components";
import { getMe } from "./redux/features/authSlice";
import { getAllDecor } from "./redux/features/decor";
import { getAllTypes } from "./redux/features/typesDecor/typesSlice";
import { Circular } from "./components/UI";
import { getAllShop } from "./redux/features/shop/shopSlice";
import { getAllShopTypes } from "./redux/features/shopType/shopTypeSlice";

function App() {
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	useEffect(() => {
		dispatch(getMe());
		dispatch(getAllDecor());
		dispatch(getAllTypes());
		dispatch(getAllShop());
		dispatch(getAllShopTypes());
	}, []);

	if (isLoading) {
		return <Circular />;
	}

	return (
		<div className="flex flex-col min-h-full  ">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="ChristmasDecor" element={<ChristmasDecor />} />
					<Route path="ChristmasDecor/:id" element={<PageItem />} />
					{/* <Route path="Page" element={<PageItem />} /> */}
					<Route path="RetroDecoration" element={<RetroDecoration />} />
					<Route path="Register" element={<Register />} />
					<Route path="SignIn" element={<Login />} />
					<Route path="User" element={<User />} />
					<Route path="basket" element={<Basket />} />
					<Route path="Admin" element={<AdminPage />} />
					<Route path="shop" element={<Shop />} />
				</Route>
			</Routes>
			<ToastContainer position="top-center" limit={2} />
		</div>
	);
}

export default App;
