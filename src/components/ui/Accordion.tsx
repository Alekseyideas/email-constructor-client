import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'; // needed for dayClick

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			'.MuiButtonBase-root': {
				padding: '5px !importent',
			},
		},
		wrapper: {
			background: '#f7f7f7',
		},
		heading: {
			fontSize: theme.typography.pxToRem(13),
			fontWeight: theme.typography.fontWeightRegular,
			margin: 0,
		},
		blockText: {
			background: '#3174ad',
			width: '100%',
			color: '#fff',
			borderRadius: '2px',
			margin: '2px 0',
			fontSize: theme.typography.pxToRem(12),
			padding: '2px 5px',
		},
		select: {
			minHeight: '30px',

			'&.Mui-expanded': {
				minHeight: '30px',
			},
		},
	})
);

export const AccordionDefault: React.FC = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState<string | false>('panel4');

	// React.useEffect(() => {
	// 	let draggableEl = document.getElementById('external-events');
	// 	if (draggableEl) {
	// 		new Draggable(draggableEl, {
	// 			itemSelector: '.fc-event',
	// 			eventData: function (eventEl) {
	// 				console.log('eventEl', eventEl);
	// 				let title = eventEl.getAttribute('title');
	// 				let id = eventEl.getAttribute('data');
	// 				return {
	// 					title: title,
	// 					id: id,
	// 				};
	// 			},
	// 		});
	// 	}
	// }, []);
	const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className={classes.root} id="external-events">
			<Accordion
				className={classes.wrapper}
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
				TransitionProps={{ unmountOnExit: true }}
			>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel1a-content"
				>
					<Typography className={classes.heading}>Трафик</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div title="dz">DZ_traffic</div>
						<div title="bb">Бюджетник_трафик</div>
						<div title="sem">SemGBB_event</div>
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel2a-content"
				>
					<Typography className={classes.heading}>Демо</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel3a-content"
				>
					<Typography className={classes.heading}>Торговля</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel4a-content"
				>
					<Typography className={classes.heading}>Мероприятия</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div style={{ background: '#808000' }} className={`${classes.blockText} fc-event`}>
							VSHZ_event
						</div>
						<div style={{ background: '#FFD700' }} className={`${classes.blockText} fc-event`}>
							GBB_event
						</div>
						<div style={{ background: '#D2691E' }} className={`${classes.blockText} fc-event`}>
							TIZ_event
						</div>
						<div style={{ background: '#FFD700' }} className={`${classes.blockText} fc-event`}>
							DZ_event
						</div>
						<div style={{ background: 'rgb(47, 79, 79)' }} className={`${classes.blockText} fc-event`}>
							SemGBB_event
						</div>
						<div style={{ background: '#2F4F4F' }} className={`${classes.blockText} fc-event`}>
							SemDZ_event
						</div>
						<div style={{ background: '#CD853F' }} className={`${classes.blockText} fc-event`}>
							VSHGBB_event
						</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel5a-content"
				>
					<Typography className={classes.heading}>Торговля (направление)</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel6a-content"
				>
					<Typography className={classes.heading}>Подписчики</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel7a-content"
				>
					<Typography className={classes.heading}>Подписчики vip</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel8a-content"
				>
					<Typography className={classes.heading}>Подписчики стандарт</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel9a-content"
				>
					<Typography className={classes.heading}>Реклама</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel10a-content"
				>
					<Typography className={classes.heading}>Триггеры</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel11a-content"
				>
					<Typography className={classes.heading}>Триггеры (портал)</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
			<Accordion className={classes.wrapper} expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
				<AccordionSummary
					className={classes.select}
					expandIcon={<ExpandMoreIcon fontSize="small" />}
					aria-controls="panel12a-content"
				>
					<Typography className={classes.heading}>Праздники</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div style={{ width: '100%' }}>
						<div className={classes.blockText}>1</div>
						<div className={classes.blockText}>2</div>
						<div className={classes.blockText}>3</div>
					</div>
				</AccordionDetails>{' '}
			</Accordion>
		</div>
	);
};
