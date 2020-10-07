import React from 'react';
import Drawer from '@material-ui/core/Drawer';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CodeIcon from '@material-ui/icons/Code';
import { Typography } from '@material-ui/core';
import { AccordionDefault, SelectDefault } from './ui';
import { SideBarStyles } from './SideBarStyles';

export const Sidebar: React.FC = () => {
	const classes = SideBarStyles();
	const [age, setAge] = React.useState('');

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string);
	};
	const open = true;

	return (
		<Drawer
			variant="permanent"
			classes={{
				paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
			}}
			open={open}
		>
			<h2 className={classes.titleBlock}>Название блока</h2>
			<ListItem>
				<AccordionDefault />
			</ListItem>
			<h2 className={classes.titleBlock}>Обозначения</h2>
			<ListItem>
				<Box display="flex" alignItems="center">
					<BorderColorIcon fontSize="small" />
					<Typography style={{ marginLeft: '15px' }}>планируется</Typography>
				</Box>
			</ListItem>{' '}
			<ListItem>
				<Box display="flex" alignItems="center">
					<CodeIcon fontSize="small" />
					<Typography style={{ marginLeft: '15px' }}>верстка</Typography>
				</Box>
			</ListItem>{' '}
			<ListItem>
				<Box display="flex" alignItems="center">
					<SearchIcon fontSize="small" />
					<Typography style={{ marginLeft: '15px' }}>тест</Typography>
				</Box>
			</ListItem>{' '}
			<ListItem>
				<Box display="flex" alignItems="center">
					<ThumbUpAltOutlinedIcon fontSize="small" />
					<Typography style={{ marginLeft: '15px' }}>согласована</Typography>
				</Box>
			</ListItem>{' '}
			<ListItem>
				<Box display="flex" alignItems="center">
					<CheckIcon fontSize="small" />
					<Typography style={{ marginLeft: '15px' }}>отправлено</Typography>
				</Box>
			</ListItem>
		</Drawer>
	);
};
