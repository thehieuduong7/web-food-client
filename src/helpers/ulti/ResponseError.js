export const ResponseError = (err) => {
	console.log("error service", err);
	return err.response
		? err.response.data
		: {
				status: 500,
				message: "Server error",
		  };
};
