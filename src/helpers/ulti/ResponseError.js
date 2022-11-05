export const ResponseError = (err) => {
	return err.response.data
		? err.response.data
		: {
				status: 500,
				message: "Server error",
		  };
};
