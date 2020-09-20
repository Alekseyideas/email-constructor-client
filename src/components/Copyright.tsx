import { Typography, Link } from '@material-ui/core';
import React from 'react'



export const Copyright: React.FC = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mcfr.ua/">
				MCFR
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}