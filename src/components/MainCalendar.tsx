import React from 'react';
// import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import FullCalendar, { EventApi } from '@fullcalendar/react';
import ukLocale from '@fullcalendar/core/locales/uk';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CodeIcon from '@material-ui/icons/Code';
import { EventInput } from '@fullcalendar/core';

const todayStr = new Date(); // YYYY-MM-DD of today

const myEvents: EventInput[] = [
	{
		id: '0',
		title: 'Some event',
		start: new Date(),
		end: moment(todayStr).add(1, 'hours').toDate(),
		className: 'yellow',
	},
	{
		id: '1',
		title: 'Some event + 2 hours',
		start: moment(todayStr).add(2, 'hours').toDate(),
		end: moment(todayStr).add(5, 'hours').toDate(),
		className: 'orange',
	},
	{
		id: '11',
		title: 'Some event + 4 hours',
		start: moment(todayStr).add(2, 'hours').toDate(),
		end: moment(todayStr).add(5, 'hours').toDate(),
		className: 'orange',
	},
	{
		id: '21',
		title: 'Some event + 5 hours',
		start: moment(todayStr).add(3, 'hours').toDate(),
		end: moment(todayStr).add(4, 'hours').toDate(),
		className: 'orange',
	},
	{
		id: '2',
		title: 'Some event + 3 hours',
		start: moment(todayStr).add(6, 'hours').toDate(),
		end: moment(todayStr).add(11, 'hours').toDate(),
		className: 'orange',
	},
	{
		id: '3',
		title: 'Some event + 4 hours',
		start: moment(todayStr).add(4, 'hours').toDate(),
		end: moment(todayStr).add(7, 'hours').toDate(),
		className: 'orange',
	},
	{
		id: '4',
		title: 'Some event + 4 hours',
		start: moment(todayStr).add(24, 'hours').toDate(),
		end: moment(todayStr).add(25, 'hours').toDate(),
		className: 'orange',
	},
];
// myEvents[0]
// const localizer = momentLocalizer(moment);
interface EventCompProps {
	event: EventApi;
}

const EventComp: React.FC<EventCompProps> = ({ event }) => {
	let icon = <BorderColorIcon style={{ fontSize: '10px' }} fontSize="small" />;
	if (event.classNames.includes('orange')) {
		icon = <CodeIcon style={{ fontSize: '10px' }} fontSize="small" />;
	}
	const t = moment(event.startStr).format('H:mm');
	return (
		<Box
			display="flex"
			alignItems="center"
			style={{
				paddingLeft: '5px',
				paddingRight: '5px',
				borderRadius: '2px',
				// background: '#DC143C',
				// color: 'white',
				width: '100%',
			}}
		>
			{icon}
			<Typography style={{ fontSize: '10px', marginLeft: '5px', whiteSpace: 'nowrap' }}>
				{t} {event.title}
			</Typography>
		</Box>
	);
};
export const MainCalendar: React.FC = () => {
	return (
		<div style={{ width: '100%' }}>
			<FullCalendar
				headerToolbar={{
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
				}}
				locale={ukLocale}
				weekNumbers
				weekNumberFormat={{
					week: 'short',
				}}
				height="100vh"
				initialEvents={myEvents}
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
				initialView="dayGridMonth"
				editable={false}
				selectable={false}
				selectMirror={false}
				dayMaxEvents={true}
				eventContent={EventComp}
			/>
		</div>
	);
};

// <Calendar
// 	localizer={localizer}
// 	events={myEvents}
// 	components={{
// 		event: EventComp,
// 	}}
// 	startAccessor="start"
// 	endAccessor="end"
// 	style={{ height: '82vh', width: '100%', minHeight: '900px' }}
// />
