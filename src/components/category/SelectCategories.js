import * as React from "react";
import { Autocomplete, Checkbox, TextField, FormControl } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const dataCategories = [
	"Oliver Hansen",
	"Van Henry",
	"April Tucker",
	"Ralph Hubbard",
	"Omar Alexander",
	"Carlos Abbott",
	"Miriam Wagner",
	"Bradley Wilkerson",
	"Virginia Andrews",
	"Kelly Snyder",
];

export default function SelectCategories({ setCategories }) {
	return (
		<>
			<FormControl fullWidth>
				<Autocomplete
					onChange={(event, value) => setCategories(value)}
					multiple
					options={dataCategories}
					disableCloseOnSelect
					limitTags={2}
					getOptionLabel={(option) => option}
					renderOption={(props, option, { selected }) => (
						<li {...props}>
							<Checkbox
								icon={icon}
								checkedIcon={checkedIcon}
								style={{ marginRight: 8 }}
								checked={selected}
							/>
							{option}
						</li>
					)}
					renderInput={(params) => (
						<>
							<TextField
								{...params}
								label="Categories"
								placeholder="Categories"
								maxRows={2}
								id="autocomplete-select-categories"
								// sx={{ overflow: "auto" }}
							/>
						</>
					)}
				/>
			</FormControl>
		</>
	);
}
