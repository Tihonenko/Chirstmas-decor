import React from "react";
import { ReadMore } from "../../UI";
import sl from "./aboutUs.module.scss";

const AboutUs = () => {
	return (
		<section className={sl.aboutUs__container}>
			<div>
				<h2 className={sl.aboutUs__title}>About Us</h2>
				<p className={sl.aboutUs__text}>
					The decorators warehouse was opened in 2012. <br />
					Our mission in the store is to offer "Unique Christmas decor you won't
					find in a major store." We are a small local business. each item is
					hand-picked with the magic of Christmas in mind. <br />
					We share our love for Christmas around the world, we now ship to over
					30 countries.
				</p>
				<ReadMore to="/aboutus">Read more...</ReadMore>
			</div>
		</section>
	);
};

export default AboutUs;
