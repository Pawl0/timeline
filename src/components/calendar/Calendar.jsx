import React from 'react';
import { Header } from './Header';
import './calendar.css';

export const Calendar = ({ children, lanes }) => {
	const [firstLane] = lanes;
	return (
		<div className="calendar-grid">
			<Header firstLane={firstLane} />
			{children}
		</div>
	);
};
