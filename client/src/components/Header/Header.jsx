import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataNav } from "../../constans/";
import { bag, user, menu, close } from "../../img/";
import NavItem from "./nav/NavItem";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../../redux/features/authSlice";
import NavImg from "./nav/NavImg";

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const isAdmin = useSelector(selectIsAdmin);
	return (
		<header className="border-b border-lightblack py-[30px]">
			<div className="relative container h-[55px]  bg-transparent ">
				<nav className="relative flex justify-between items-center">
					<Link to="" className="text-logo outline-none">
						DECOR
					</Link>

					<ul className="flex gap-[40px] md:hidden">
						{dataNav.map((obj, idx) => (
							<NavItem key={idx} to={obj.link}>
								{obj.title}
							</NavItem>
						))}
					</ul>

					<ul className="flex gap-[40px]">
						{/* ДОДЕЛАТЬ ЧЕРЕЗ MAP */}
						<NavImg src={user} to={`/user`}></NavImg>
						<NavImg src={bag} to={`/basket`}></NavImg>

						<li>
							<div
								onClick={() => setIsActive(prev => !prev)}
								className="flex flex-1 justify-end items-center"
							>
								<img
									src={isActive ? close : menu}
									alt="menu"
									className="w-[22px] h-[22px] object-contain cursor-pointer"
								/>
								<div
									className={`${
										isActive ? "flex flex-col" : "hidden"
									} min-w-[200px] absolute z-50 top-[80px] -right-4 mx-4 my-2 bg-lightblack md:w-full md:justify-center md:text-base md:text-center `}
								>
									<ul className="flex flex-col text-lightwhite gap-5  md:visible">
										{dataNav.map((obj, idx) => (
											<li key={idx} className="hidden md:contents">
												<Link
													to={obj.link}
													className="a-hover text-base relative"
												>
													{obj.title}
												</Link>
											</li>
										))}
										<li>
											<Link
												to="RetroDecoration"
												className="hover:text-lightred"
											>
												Retro Decoration
											</Link>
										</li>
										{isAdmin === "ADMIN" ? (
											<li>
												<Link to="admin" className="a-hover">
													Admin
												</Link>
											</li>
										) : null}
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
