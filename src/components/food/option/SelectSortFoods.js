import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSortFoods({ value, onChange, options }) {
	return (
		<FormControl
			sx={{ m: 1, minWidth: 180, textAlign: "center" }}
			variant="standard"
		>
			<InputLabel id="demo-select-small">Sort by</InputLabel>
			<Select
				labelId="demo-select-small"
				value={value}
				label="Age"
				onChange={onChange}
			>
				{options.map((e) => {
					return (
						<MenuItem key={e.id} value={e.value}>
							{e.label}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
}
