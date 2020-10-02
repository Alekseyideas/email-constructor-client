import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			fontWeight: theme.typography.fontWeightRegular,
		},
	}),
);


export const AccordionDefault: React.FC = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className={classes.root}>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} TransitionProps={{ unmountOnExit: true }} >
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
				>
					<Typography className={classes.heading}>Трафик</Typography>
				</AccordionSummary>
				<AccordionDetails>
					1
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
				>
					<Typography className={classes.heading}>Демо</Typography>
				</AccordionSummary>
				<AccordionDetails>
					2
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3a-content"
				>
					<Typography className={classes.heading}>Торговля</Typography>
				</AccordionSummary>
				<AccordionDetails>
					3
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4a-content"
				>
					<Typography className={classes.heading}>Мероприятия</Typography>
				</AccordionSummary>
				<AccordionDetails>
					4
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel5a-content"
				>
					<Typography className={classes.heading}>Торговля (направление)</Typography>
				</AccordionSummary>
				<AccordionDetails>
					5
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel6a-content"
				>
					<Typography className={classes.heading}>Подписчики</Typography>
				</AccordionSummary>
				<AccordionDetails>
					6
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel7a-content"
				>
					<Typography className={classes.heading}>Подписчики vip</Typography>
				</AccordionSummary>
				<AccordionDetails>
					7
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel8a-content"
				>
					<Typography className={classes.heading}>Подписчики стандарт</Typography>
				</AccordionSummary>
				<AccordionDetails>
					8
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel9a-content"
				>
					<Typography className={classes.heading}>Реклама</Typography>
				</AccordionSummary>
				<AccordionDetails>
					9
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel10a-content"
				>
					<Typography className={classes.heading}>Триггеры</Typography>
				</AccordionSummary>
				<AccordionDetails>
					10
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel11a-content"
				>
					<Typography className={classes.heading}>Триггеры (портал)</Typography>
				</AccordionSummary>
				<AccordionDetails>
					11
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel12a-content"
				>
					<Typography className={classes.heading}>Праздники</Typography>
				</AccordionSummary>
				<AccordionDetails>
					12
				</AccordionDetails>
			</Accordion>
		</div>
	);
}