import { DropDownItem, MyInput, ShopBtn } from "../../UI/";
import sl from "./modalDecor.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectTypes,
	setFocus
} from "../../../redux/features/typesDecor/typesSlice";

const ModalDecor = ({ active, setActive, createItem }) => {
	const dispatch = useDispatch();

	const { item, setSelectType } = useSelector(selectTypes);

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [open, setOpen] = useState(false);

	const dropHandler = item => {
		dispatch(setFocus(item));
		setOpen(!open);
	};

	const submitHandler = async () => {
		try {
			const data = new FormData();
			data.append("title", title);
			data.append("price", price);
			data.append("description", description);
			data.append("image", image);
			data.append("typesId", setSelectType._id);
			await dispatch(createItem(data));
		} catch (e) {
			console.log(e);
		}
	};

	const clearHandler = () => {
		setTitle("");
		setPrice("");
		setDescription("");
		dispatch(setFocus(""));
		setImage("");
	};

	return (
		<div
			className={`${sl.modal__bg} ${
				active ? sl.modal__active : sl.modal__close
			}`}
			onClick={() => setActive(false)}
		>
			<div
				className={`p-10 bg-lightwhite rounded min-h-[100px] min-w-[500px]  translate-y-24 opacity-0 ${
					active
						? "translate-y-0 opacity-100 transition-all delay"
						: "transition-all delay"
				}`}
				onClick={e => e.stopPropagation()}
			>
				<form
					onSubmit={e => e.preventDefault()}
					className="flex flex-col gap-3"
				>
					<h3 className="font-semibold text-base mb-3">Create Decoration</h3>
					<label className="flex flex-col gap-3">
						Title:
						<MyInput
							value={title}
							onChange={e => setTitle(e.target.value)}
							type="text"
							className="w-full"
						/>
					</label>
					<div className="w-full h-full">
						<ShopBtn
							className={`${
								open
									? "bg-lightblack text-lightwhite rounded-t-btn transition-all delay-150"
									: "rounded-btn z-10 transition-all delay"
							} relative w-[146px] text-center`}
							onClick={() => setOpen(!open)}
						>
							{setSelectType.name || "Select Type"}
						</ShopBtn>
						<ul
							className={`${
								open
									? "opacity-100 -translate-y-1 z-10 transition-drop delay"
									: "opacity-0 -translate-y-5 -z-20 transition-drop delay"
							} absolute w-[146px] pt-1  text-center rounded-b-btn  flex flex-col gap-1 bg-lightblack text-lightwhite`}
						>
							{item?.map(item => (
								<DropDownItem
									active={item._id === setSelectType._id}
									onClick={() => dropHandler(item)}
									key={item._id}
									item={item}
								/>
							))}
						</ul>
					</div>
					<label className="flex flex-col gap-3">
						Price:
						<MyInput
							value={price}
							onChange={e => setPrice(e.target.value)}
							type="text"
							className="w-full "
						/>
					</label>
					<label className="flex flex-col gap-3">
						Description:
						<textarea
							value={description}
							onChange={e => setDescription(e.target.value)}
							className="w-full min-h-[100px] transition-all border border-gray-400 bg-white rounded-btn outline-none px-4 py-2 text-lightblack focus:border-lightblack"
						></textarea>
					</label>
					<label className={sl.image__label}>
						Image
						<MyInput
							onChange={e => setImage(e.target.files[0])}
							type="file"
							className="hidden mt-3"
						/>
					</label>
					<div className="flex object-cover justify-center">
						{image && (
							<img
								className="max-w-full max-h-[200px]"
								src={URL.createObjectURL(image)}
								alt=""
							/>
						)}
					</div>

					<div className="flex gap-3">
						<ShopBtn
							onClick={submitHandler}
							type="submit"
							className="rounded-btn text-center hover:-translate-y-1 transition-transform delay"
						>
							Create
						</ShopBtn>
						<button
							onClick={clearHandler}
							className="rounded-btn bg-lightred py-[4px] px-[26px] text-lightwhite hover:-translate-y-1 transition-all delay"
						>
							Clear
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ModalDecor;
