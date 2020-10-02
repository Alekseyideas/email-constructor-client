import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../config';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AccordionDefault, SelectDefault } from './ui';

const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},

	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},

	formControl: {
		margin: theme.spacing(1),
		width: '100%',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));


export const Sidebar: React.FC = ({ }) => {
	const classes = useStyles();
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
			<div className={classes.toolbarIcon}>
				<IconButton onClick={() => console.log('closeDrower')}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider light />
			<ListItem>
				<SelectDefault value={age} handleChange={handleChange} options={[{ value: '10', label: 'test' }]} title="Направление" />
			</ListItem>

			<ListItem>
				<SelectDefault value={age} handleChange={handleChange} options={[{ value: '10', label: 'test' }]} title="Каналы" />
			</ListItem>

			<ListItem>
				<SelectDefault value={age} handleChange={handleChange} options={[{ value: '10', label: 'test' }]} title="Тип письма" />
			</ListItem>

			<ListItem>
				<SelectDefault value={age} handleChange={handleChange} options={[{ value: '10', label: 'test' }]} title="Издание" />
			</ListItem>
			<ListItem>
				<AccordionDefault />

			</ListItem>
		</Drawer>
	);
}