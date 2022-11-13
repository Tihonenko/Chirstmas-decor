import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MyInput, ShopBtn } from "../../UI";

const TypeModal = ({ active, setActive, nameModal, createType }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	const submitHandler = async () => {
		try {
			const data = new FormData();
			data.append("name", name);
			await dispatch(createType(data));
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div
			className={`min-w-[100vw] min-h-[100vh] bg-lightblack/40 top-0 left-0 fixed flex z-20 justify-center items-center opacity-0 pointer-events-none ${
				active
					? "opacity-100 transition-opacity delay pointer-events-auto"
					: "opacity-0 transition-opacity delay "
			}`}
			onClick={() => setActive(false)}>
			<div
				className={`p-10 bg-lightwhite rounded min-h-[100px] min-w-[500px]  translate-y-24 opacity-0 ${
					active
						? "translate-y-0 opacity-100 transition-all delay"
						: "transition-all delay"
				}`}
				onClick={(e) => e.stopPropagation()}>
				<h3 className="font-semibold text-base mb-3">{nameModal}</h3>
				<form
					onSubmit={(e) => e.preventDefault()}
					className="flex flex-col gap-5">
					<label className="flex flex-col gap-3">
						Type name:
						<MyInput
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<div className="flex gap-3">
						<ShopBtn
							className="rounded-btn text-center hover:-translate-y-1 transition-transform delay "
							onClick={submitHandler}>
							Create
						</ShopBtn>
						<button
							className="rounded-btn bg-lightred py-[4px] px-[26px] text-lightwhite hover:-translate-y-1 transition-all delay"
							onClick={() => setName("")}>
							Clear
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TypeModal;
