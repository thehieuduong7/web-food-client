import {
	FormControl,
	Grid,
	Typography,
	TextField,
	Button,
} from "@mui/material";
import { useState } from "react";
const min = 0;
const max = 10;

function InfoFood() {
	const [value, setValue] = useState();

	return (
		<>
			<Grid
				container
				spacing={2}
				sx={{ minHeight: "350px", border: 1, paddingY: 5 }}
			>
				<Grid item lg={5} md={5} sx={{ border: 1, borderRadius: "16px" }}>
					<img
						src="img_girl.jpg"
						alt=" food"
						width="100%"
						style={{
							aspectRatio: "1 / 1",
							minHeight: "250px",
							maxHeight: "300px",
						}}
					/>
				</Grid>
				<Grid item lg={7} md={7}>
					<Grid container direction="column" gap={1}>
						<Typography variant="h3" component="h3">
							name
						</Typography>
						<p>
							Trong ẩm thực Việt, có lẽ chẳng món ăn nào “dễ chịu” như gỏi cuốn.
							Dùng làm thức ăn nhẹ cũng được, mà ăn no căng bụng cũng không
							ngấy; có lẽ bởi vậy mà gỏi cuốn đã trở thành món ăn không thể
							thiếu trong thực đơn của các nhà hàng Việt tại trời Tây. Người...
						</p>
						<Typography>
							<strong>Shop:</strong> hieu
						</Typography>
						<Typography>
							<strong>Category:</strong> name-name-name
						</Typography>
						<Typography>
							<strong>Status:</strong> available
						</Typography>
						<Typography variant="h5">100 $</Typography>
						<FormControl sx={{ flexDirection: "row" }} fullWidth>
							<TextField
								label="Amount"
								type="number"
								inputProps={{ min, max }}
								value={value}
								onChange={(e) => {
									var value = parseInt(e.target.value, 10);
									if (value > max) value = max;
									if (value < min) value = min;
									setValue(value);
								}}
								variant="outlined"
								sx={{
									minWidth: "115px",
								}}
							/>
							<Button variant="outlined" color="inherit" sx={{ ml: 2 }}>
								Add to your cart
							</Button>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default InfoFood;
