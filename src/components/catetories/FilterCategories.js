import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Badge, Collapse, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { CategoriesContext } from "../../helpers/context/CategoriesContext";
import Loading from "../layout/Loading";

export default function FilterCategories({
	loading,
	categories,
	categoriesChecked,
	setCategoriesChecked,
}) {
	const [open, setOpen] = React.useState(true);

	if (loading) return <Loading />;

	const handleToggle = (value) => () => {
		const currentIndex = categoriesChecked.indexOf(value);
		const newChecked = [...categoriesChecked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setCategoriesChecked(newChecked);
	};

	return (
		<List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
			<ListItemButton
				onClick={() => {
					setOpen(!open);
				}}
			>
				<ListItemText>
					<Typography variant="body2" color="black" sx={{ fontWeight: "bold" }}>
						Categories
					</Typography>
				</ListItemText>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{categories.map((e) => {
					return (
						<>
							<ListItem
								key={e.id}
								secondaryAction={
									<Checkbox
										edge="end"
										onChange={handleToggle(e.id)}
										categoriesChecked={categoriesChecked.indexOf(e.id) !== -1}
									/>
								}
							>
								<ListItemButton>
									<ListItemText>
										{e.name}
										{/* <Badge
											badgeContent={String(e.amount)}
											color="error"
											sx={{ ml: 2 }}
										></Badge> */}
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</>
					);
				})}
			</Collapse>
		</List>
	);
}
