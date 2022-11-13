import React, { useState } from "react";
import { Link } from "react-router-dom";
import sl from "./header.module.scss";
import { dataNav } from "../../constans/";
import { bag, user, menu, close } from "../../img/";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../../redux/features/authSlice";

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const isAdmin = useSelector(selectIsAdmin);
	return (
		<header className="border-b border-lightblack py-[30px]">
			<div className="relative container h-[55px]  bg-transparent ">
				<nav className="reltive flex justify-between items-center">
					<Link to="" className="text-logo outline-none">
						DECOR
					</Link>

					<ul className="flex gap-[40px]">
						{dataNav.map((obj, idx) => (
							<li key={idx}>
								<Link
									to={obj.link}
									className="a-hover text-base font-medium relative"
								>
									{obj.title}
								</Link>
							</li>
						))}
					</ul>

					<ul className="flex gap-[40px]">
						<li>
							<Link to="/User">
								<img src={user} alt={`user`} />
							</Link>
						</li>
						<li>
							<Link to="/basket">
								<img src={bag} alt={`user`} />
							</Link>
						</li>
						<li>
							<div
								onClick={() => setIsActive(prev => !prev)}
								className="flex flex-1 justify-end items-center"
								// {[sl.menu, isActive ? sl.menu_active : ''].join(' ')}
							>
								<img
									src={isActive ? close : menu}
									alt="menu"
									className="w-[22px] h-[22px] object-contain cursor-pointer"
								/>
								<div
									className={`${
										isActive ? "flex" : "hidden"
									} min-w-[200px] absolute z-50 top-[80px] right-0 mx-4 my-2 bg-lightblack`}
								>
									<ul className="flex-row gap-[40px] text-lightwhite">
										<li>
											<Link to="#" className="hover:text-lightred">
												Menu
											</Link>
										</li>
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
