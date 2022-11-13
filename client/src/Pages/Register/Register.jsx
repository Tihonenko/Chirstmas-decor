import { Link, Navigate } from "react-router-dom";
import { MyInput, SubmitBtn } from "../../components/UI";
import { registerUser, selectIsAuth } from "../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Register = () => {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		reset,
		setFocus,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	useEffect(() => {
		setFocus("email")
	}, []);


	const onSubmit = async (value) => {
		const data = await dispatch(registerUser(value));
		if ("token" in data.payload) {
			window.localStorage.setItem("token", data.payload);
		}
		reset();
		return <Navigate to="/User" />;
	};

	if (isAuth) {
		return <Navigate to="/User" />;
	}
	return (
		<div className="container min-h-full flex-auto pt-10">
			<h2 className="text-lg font-medium text-center">Create Account</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-5 max-w-[509] w-1/2 mx-auto px-20 py-10 border-gray-600 border-btn">
				<label className="flex flex-col gap-3">
					Email Addres:
					<MyInput
						{...register("email", {
							required: "Email requried field",
						})}
						type="email"
						errorsText={errors.email?.message}
					/>
				</label>
				<label className="flex flex-col gap-3">
					Password:
					<MyInput
						type="password"
						errorsText={errors.password?.message}
						{...register("password", {
							required: "Password reqiried field",
							minLength: {
								value: 5,
								message: "Password min length 5 symbols",
							},
						})}
					/>
				</label>
				<div>
					<SubmitBtn disabled={!isValid} type="submit">
						Create
					</SubmitBtn>
					<Link to="/SignIn" className="ml-5 inline-block a-hover">
						Sign In
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
