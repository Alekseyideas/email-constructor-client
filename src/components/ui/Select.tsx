import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		width: '100%',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

interface SelectProps {
	options: { value: string, label: string }[],
	title: string;
	handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
	value: string;
	name?: string;

}

export const SelectDefault: React.FC<SelectProps> = ({ options, title, handleChange, value, name }) => {
	const classes = useStyles();

	return (
		<FormControl className={classes.formControl}>
			<InputLabel id={name}>{title}</InputLabel>
			<Select
				id="demo-simple-select"
				value={value}
				onChange={handleChange}
			>
				{options.map((option) => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
			</Select>
		</FormControl>
	);
}