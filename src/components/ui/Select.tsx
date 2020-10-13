import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	formControl: {
		// margin: theme.spacing(1),
		width: '100%',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	label: {
		color: theme.palette.background.paper,
		fontSize: '11px',
		marginTop: 0,
	},
	select: {
		marginTop: 0,
		color: theme.palette.background.paper,
		'&:before': {
			borderColor: theme.palette.background.paper,
		},
		'&:after': {
			borderColor: theme.palette.background.paper,
		},

		'&:hover:not(.Mui-disabled)': {
			'&:before': {
				borderColor: theme.palette.background.paper,
			},
			'&:after': {
				borderColor: theme.palette.background.paper,
			},
		},
	},
	icon: {
		fill: theme.palette.background.paper,
	},
}));

interface SelectProps {
	options: { value: string; label: string }[];
	title: string;
	handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
	value: string;
	name?: string;
	stylesSelect?: React.CSSProperties | undefined;
	stylesLabel?: React.CSSProperties | undefined;
}

export const SelectDefault: React.FC<SelectProps> = ({
	options,
	title,
	handleChange,
	value,
	name,
	stylesSelect,
	stylesLabel,
}) => {
	const classes = useStyles();

	return (
		<FormControl className={classes.formControl}>
			{/* <InputLabel id={name} className={classes.label} style={stylesLabel}>
				{title}
			</InputLabel> */}
			<FormHelperText className={classes.label}>{title}</FormHelperText>

			<Select
				placeholder="Зробіть вибір"
				value={value}
				displayEmpty
				defaultValue="Зробіть вибір"
				onChange={handleChange}
				style={stylesSelect}
				className={classes.select}
				inputProps={{
					classes: {
						icon: classes.icon,
					},
				}}
			>
				<MenuItem value="" disabled>
					Зробіть вибір
				</MenuItem>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
