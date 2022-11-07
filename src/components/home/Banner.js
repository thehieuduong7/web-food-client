function Banner() {
	return (
		// <div
		// 	id="carouselExampleSlidesOnly"
		// 	className="carousel slide"
		// 	data-ride="carousel"
		// >
		// 	<div className="carousel-inner">
		// 		<div className="carousel-item active">
		// <img
		// 	className="d-block w-100"
		// 	style={{
		// 		height: "500px",
		// 	}}
		// 	src="/image/bgHome.png"
		// 	alt="First slide"
		// />
		// 		</div>
		// 	</div>
		// </div>

		<div class="bg-image hover-zoom">
			<img
				className="d-block w-100"
				style={{
					height: "500px",
				}}
				src="/image/bgHome.png"
				alt="First slide"
			/>
		</div>
	);
}

export default Banner;
