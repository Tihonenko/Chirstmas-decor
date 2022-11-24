import React from "react";
import { Contact, Navigation } from "../../constans";
import { MyInput, SubmitBtn } from "../UI";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-lightblack mt-20">
			<div className="container text-lightwhite py-10 mb-10">
				<div className="flex flex-1 gap-5 items-baseline justify-between md:flex-wrap smd:text-2xl">
					<Link to="" className="text-logo smd:basis-full	smd:text-center">
						DECOR
					</Link>

					<div className="flex flex-col items-start">
						<span className="text-base  uppercase">Contact Us</span>
						<ul className="mt-[10px]">
							{Contact.map((obj, idx) => (
								<li className="mt-[5px]" key={idx}>
									<Link className="a-hover" to={obj.link}>
										{obj.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col items-start">
						<span className="text-base  uppercase">Navigation</span>
						<ul className="mt-[10px]">
							{Navigation.map((obj, idx) => (
								<li className="mt-[5px]" key={idx}>
									<Link className="a-hover" to={obj.link}>
										{obj.title}{" "}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<form className="flex flex-col gap-[10px] items-star md:w-full md:justify-center text-center">
						<h3 className="text-base  uppercase">GET SPECIAL OFFERS</h3>
						<MyInput placeholder="Email" type="email" />
						<SubmitBtn type="sumbit" className="md:w-full">
							SUBMIT
						</SubmitBtn>
					</form>
				</div>
			</div>
			<div className="text-lightwhite border-t py-5">
				<div className="container text-center">
					<span className="hover:text-lightred text-sm">
						{" "}
						© 2022 Christmas Decor — Web design by Tihonenko
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
