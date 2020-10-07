import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../config';

export const SideBarStyles = makeStyles((theme) => ({
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		// height: '100vh',
		// overflow: 'auto',
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

	wrapper: {
		maxWidth: 'calc(100% - 32px)',
		background: '#f7f7f7',
		borderRadius: '4px',
		margin: '10px auto 20px',
		width: '100%',
		boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
	},
	titleBlock: {
		margin: '16px 20px 0',
	},
}));
