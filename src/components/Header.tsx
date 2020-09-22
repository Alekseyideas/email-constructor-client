import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { drawerWidth } from '../config';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},

	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
}));


interface AppBarProps {
	title: string;
}

export const Header: React.FC<AppBarProps> = ({ title }) => {
	const classes = useStyles();
	const open = true;

	return (
		<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={() => console.log('drower open')}
					className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
				>
					<MenuIcon />
				</IconButton>
				<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
					{title}
				</Typography>
				<IconButton color="inherit">
					<Badge badgeContent={4} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}