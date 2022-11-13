import React from "react";
import { CircularProgress } from "@mui/material";

const Circular = () => {
	return (
		<div className="flex justify-center items-center flex-col flex-auto min-h-full mt-20">
			<CircularProgress color="info" size={100} />
		</div>
	);
};

export default Circular;
