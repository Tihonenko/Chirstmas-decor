import React from "react";
import { retroDecor } from "../../constans";

const RetroDecoration = () => {
	return (
		<section className="container min-h-full flex-auto mt-10">
			<h2 className="text-center text-lg font-medium font-Rembank">
				About Retro Decoration
			</h2>

			<div className=" overflow-hidden">
				{retroDecor.map((obj, idx) => (
					<figure key={idx} className="block">
						<div className="flex flex-1 bg-lightred gap-5 p-5 mt-5 ">
							<img
								src={obj.img}
								alt="about"
								className="basis-1/3 max-w-[50%] max-h-[200px] object-cover"
							/>
							<figcaption className="basis-2/3 text-lightwhite">
								<span className="block text-start text-3xl font-medium pb-2">
									{obj.title}
								</span>
								<p className="block text-justify leading-6">{obj.body}</p>
							</figcaption>
						</div>
					</figure>
				))}
			</div>
		</section>
	);
};

export default RetroDecoration;
