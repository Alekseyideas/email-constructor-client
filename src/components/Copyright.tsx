import { Typography, Link } from '@material-ui/core';
import React from 'react';

export const Copyright: React.FC = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'© '}
			<Link color="inherit" href="https://mcfr.ua/">
				Цифрове видавництво MCFR
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};
