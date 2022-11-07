import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Badge, Collapse, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { CategoriesContext } from "../../helpers/context/CategoiesContext";
import Loading from "../layout/Loading";

export default function FilterCategories() {
	const {
		categoriesState: { loading, error, categories },
		getCategories,
	} = React.useContext(CategoriesContext);
	const [checked, setChecked] = React.useState([1]);
	const [open, setOpen] = React.useState(true);
	React.useEffect(() => {
		getCategories();
	}, []);
	if (loading) return <Loading />;
	if (error)
		return (
			<Typography
				variant="body1"
				color="red"
				justifyContent={"center"}
				sx={{ width: "100%" }}
			>
				{error}
			</Typography>
		);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
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
										// onChange={handleToggle(value)}
										// checked={checked.indexOf(value) !== -1}
									/>
								}
							>
								<ListItemButton>
									<ListItemText>
										{e.name}
										<Badge
											badgeContent={String(e.amount)}
											color="error"
											sx={{ ml: 2 }}
										></Badge>
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
