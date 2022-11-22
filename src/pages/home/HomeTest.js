import { useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import { ImageUtil } from "../../helpers/util/uploadImage";

function HomeTest() {
	// console.log(axiosPrivate.defaults.headers.common);

	const onSelectFile = async (e) => {
		const res = await ImageUtil.uploadImage(e.target.files[0]);
		console.log(res);
		// console.log("hello");
	};
	return (
		<>
			<Form.Group controlId="formFileSm" className="w-100 border-0">
				<input
					type="file"
					multiple
					onChange={onSelectFile}
					size="md"
					accept="image/*"
				/>
				<div className="invalid-feedback">require file upload</div>
			</Form.Group>
		</>
	);
}

export default HomeTest;
