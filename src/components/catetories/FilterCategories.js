import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { Badge, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function FilterCategories() {
	const [checked, setChecked] = React.useState([1]);
	const [open, setOpen] = React.useState(true);

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
				<ListItemText>Categories</ListItemText>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{[0, 1, 2, 3].map((value) => {
					const labelId = `checkbox-list-secondary-label-${value}`;
					return (
						<>
							<ListItem
								key={value}
								secondaryAction={
									<Checkbox
										edge="end"
										onChange={handleToggle(value)}
										checked={checked.indexOf(value) !== -1}
										inputProps={{ "aria-labelledby": labelId }}
									/>
								}
							>
								<ListItemButton>
									{/* <ListItemAvatar>
								<Avatar
									alt={`Avatar n°${value + 1}`}
									src={`/static/images/avatar/${value + 1}.jpg`}
								/>
							</ListItemAvatar> */}
									<ListItemText id={labelId}>
										Line item
										<Badge
											badgeContent={value + 1}
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
