import { Grid } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";

function CarouselImage({ value }) {
	const [activeChild, setActiveChild] = useState(0);
	const handleChange = (prev) => {
		setActiveChild(prev);
	};
	if (!value) {
		value = [
			{
				id: -1,
				url: "/image/foodImage.png",
			},
		];
	}
	return (
		<>
			<Carousel
				index={activeChild} // <-- This controls the activeChild
				onChange={handleChange}
				autoPlay={false} // <-- You probaly want to disable this for our purposes
				navButtonsAlwaysInvisible={value.length === 1}
				animation="slide"
				style={{ borderRadius: "16px" }}
			>
				{value.map((e, index) => {
					return (
						<Grid align="center" key={index}>
							<img
								width={"100%"}
								height={"100%"}
								style={{ borderRadius: "16px", minHeight: "350px" }}
								src={e.url}
								alt={"foods"}
							/>
						</Grid>
					);
				})}
			</Carousel>
		</>
	);
}

export default CarouselImage;
