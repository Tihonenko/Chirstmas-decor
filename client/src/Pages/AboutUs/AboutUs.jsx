import React from "react";
import { ourProducts } from "../../img/";
import { connect, about } from "../../constans/";

const AboutUs = () => {
	return (
		<section className="middle__content container mt-10">
			<h1 className="text-lg text-center font-Rembank">About Us</h1>
			<p className="text-center text-base">
				The decorators warehouse was opened in 2012. Our mission in the store is
				to offer "Unique Christmas decor you won't find in a major store." We
				are a small local business. each item is hand-picked with the magic of
				Christmas in mind. We share our love for Christmas around the world, we
				now ship to over 30 countries.
			</p>
			<div className="flex flex-auto gap-5 mt-10 text-lightwhite w-full">
				<div className="basis-3/5 bg-lightred p-5 cursor-default">
					<h2 className="text-lg font-Rembank">Our Products</h2>
					<p className="text-base">
						There are more than 20 different Merry Christmas themed areas in our
						store. decor ranges from rustic to elegant and quirky. Each area is
						an adventure in itself where you will see displays like nowhere
						else. as commercial fixtures, outdoor resin, countless decorations,
						wreaths, garlands, flowers, ribbons, and more. We are your one stop
						shop for all your Christmas decorations!
					</p>
				</div>
				<div className="basis-2/5">
					<img src={ourProducts} alt="ourProducts" className="w-full h-full" />
				</div>
			</div>
			<h3 className="text-lg text-center font-Rembank mt-10">
				Shop Online or In Store
			</h3>
			<p className="text-center text-base mt-2">
				Shop online for some of our most popular Christmas themes or come
				experience our Christmas Wonderland and shop in-store. We hope to see
				you soon!
			</p>
			<div className="flex gap-5 mt-5 ">
				{about.map((obj, idx) => (
					<figure className="w-[350px] h-[350px] ">
						<img src={obj.img} className="w-full h-full hover:brightness-110" />
					</figure>
				))}
			</div>
			<div className="flex mt-10 items-center justify-center gap-2">
				<h5 className="uppercase cursor-default">connect with @DECOR</h5>

				<ul className="flex gap-2">
					{connect.map((obj, idx) => (
						<li key={idx} className="hover:bg-lightwhite transition-colors p-1">
							<a href={obj.link}>
								<img src={obj.img} alt="" className="w-[35px] h-[35px]" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default AboutUs;
