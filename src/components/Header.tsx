import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { drawerWidth } from '../config';
import { SelectDefault } from './ui';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
		justifyContent: 'space-between',
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
	selectWrapper: {
		width: '110px',
		marginRight: theme.spacing(1),

		'& > div > label': {
			// transform: 'translate(0, 1.5px) scale(0.75)',
			// transformOrigin: 'top left',
		},
	},
}));

interface AppBarProps {
	title: string;
}

export const Header: React.FC<AppBarProps> = ({ title }) => {
	const [age, setAge] = React.useState('');
	const [chanтel, setChaтnel] = React.useState('');
	const [letterType, setLetterType] = React.useState('');
	const [edition, setEdition] = React.useState('');

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string);
	};
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
				<Box display="inline-flex" alignItems="center">
					<Box className={classes.selectWrapper}>
						<SelectDefault
							value={age}
							handleChange={handleChange}
							options={[
								{ value: '10', label: 'Бюджет' },
								{ value: '11', label: 'Головбух (ком.)' },
								{ value: '12', label: 'Кадри' },
								{ value: '13', label: 'ОТ' },
								{ value: '14', label: 'Освіта' },
								{ value: '15', label: 'Охорона здоров’я' },
							]}
							title="Направление"
						/>
					</Box>
					<Box className={classes.selectWrapper}>
						<SelectDefault
							value={chanтel}
							handleChange={(event: React.ChangeEvent<{ value: unknown }>) => setChaтnel(event.target.value as string)}
							options={[
								{ value: '10', label: 'All' },
								{ value: '11', label: 'email' },
								{ value: '12', label: 'push' },
								{ value: '13', label: 'messenger' },
								{ value: '14', label: 'viber' },
							]}
							title="Каналы"
						/>
					</Box>{' '}
					<Box className={classes.selectWrapper}>
						<SelectDefault
							value={letterType}
							handleChange={(event: React.ChangeEvent<{ value: unknown }>) =>
								setLetterType(event.target.value as string)
							}
							options={[
								{ value: '10', label: 'All' },
								{ value: '11', label: 'traffic' },
								{ value: '12', label: 'demo' },
								{ value: '13', label: 'market' },
								{ value: '14', label: 'event' },
								{ value: '15', label: 'marketportal' },
								{ value: '16', label: 'client' },
								{ value: '17', label: 'clientvip' },
								{ value: '18', label: 'clientst' },
								{ value: '19', label: 'adv' },
								{ value: '20', label: 'trigger' },
								{ value: '21', label: 'triggerportal' },
								{ value: '22', label: 'hollyday' },
							]}
							title="Тип письма"
						/>
					</Box>{' '}
					<Box className={classes.selectWrapper}>
						<SelectDefault
							value={edition}
							handleChange={(event: React.ChangeEvent<{ value: unknown }>) => setEdition(event.target.value as string)}
							options={[
								{ value: 'Зробіть вибір', label: 'Зробіть вибір' },
								{ value: '10', label: 'All' },
								{ value: 'UZOZ', label: 'UZOZ' },
								{ value: 'DGMS', label: 'DGMS' },
								{ value: 'EMZ', label: 'EMZ' },
								{ value: 'VSHKM', label: 'VSHKM' },
								{ value: 'VSHGM', label: 'VSHGM' },
								{ value: 'SemMed', label: 'SemMed' },
								{ value: 'SemMedVIP', label: 'SemMedVIP' },
								{ value: 'DOZ', label: 'DOZ' },
							]}
							title="Издание"
						/>
					</Box>
				</Box>
				<Box display="flex" alignItems="center">
					<AccountCircle />
					<Typography style={{ marginLeft: '10px' }}>Белоусов Александр</Typography>
					<Button variant="outlined" color="inherit" startIcon={<ExitToApp />} style={{ marginLeft: '20px' }}>
						Выйти
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};
