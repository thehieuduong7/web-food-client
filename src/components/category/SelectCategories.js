import * as React from "react";
import {
	Autocomplete,
	Checkbox,
	TextField,
	FormControl,
	CircularProgress,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { CategoriesContext } from "../../helpers/context/CategoiesContext";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SelectCategories({ value, setState }) {
	const {
		categoriesState: { loading, categories },
		getCategories,
	} = React.useContext(CategoriesContext);
	React.useEffect(() => {
		getCategories();
	}, []);

	// value = value.map((e) => categories.find((cate) => cate.id === e));

	return (
		<>
			{!loading && (
				<Autocomplete
					name="categories"
					onChange={(e, value) => {
						// setState(value.map((e) => e.id));
						setState(value);
					}}
					multiple
					options={categories}
					disableCloseOnSelect
					limitTags={2}
					getOptionLabel={(option) => option.name}
					key={(option) => option.id}
					value={value}
					renderOption={(props, option, { selected }) => (
						<li {...props}>
							<Checkbox
								icon={icon}
								checkedIcon={checkedIcon}
								style={{ marginRight: 8 }}
								checked={selected}
							/>
							{option.name}
						</li>
					)}
					renderInput={(params) => (
						<>
							<TextField
								{...params}
								placeholder="Categories"
								maxRows={2}
								id="autocomplete-select-categories"
								variant="standard"
								InputProps={{
									...params.InputProps,
									endAdornment: (
										<React.Fragment>
											{loading ? (
												<CircularProgress color="inherit" size={20} />
											) : null}
											{params.InputProps.endAdornment}
										</React.Fragment>
									),
								}}
							/>
						</>
					)}
					fullWidth
					sx={{ border: 0 }}
				/>
			)}
		</>
	);
}
