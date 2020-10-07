import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Copyright } from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

interface Values {
	email: string;
	password: string;
}

export const Login: React.FC = () => {
	const history = useHistory();
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Увійти
				</Typography>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validate={(values) => {
						const errors: Partial<Values> = {};
						if (!values.email) {
							errors.email = `Обов'зкове поле`;
						} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
							errors.email = 'Невірна адреса електронної пошти';
						}
						if (!values.password) {
							errors.password = `Обов'зкове поле`;
						}

						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							setSubmitting(false);
							history.push('/home');
							// alert(JSON.stringify(values, null, 2));
						}, 1500);
					}}
				>
					{({ submitForm, isSubmitting }) => (
						<Form className={classes.form}>
							<Field
								component={TextField}
								variant="outlined"
								margin="normal"
								// required
								fullWidth
								label="Ваш Email"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<Field
								component={TextField}
								variant="outlined"
								margin="normal"
								// required
								fullWidth
								name="password"
								label="Пароль"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Запам'ятати мене" />
							<Button
								// type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								disabled={isSubmitting}
								onClick={submitForm}
								style={{ height: '36px' }}
							>
								{isSubmitting ? <CircularProgress size={15} /> : 'Увiйти'}
							</Button>
						</Form>
					)}
				</Formik>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};
