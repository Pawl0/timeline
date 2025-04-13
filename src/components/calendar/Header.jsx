import React from 'react';
import './calendar.css';

const formatDateHeader = (dateString) => {
	const date = new Date(dateString);
	const monthLong = date.toLocaleString('default', {
		month: 'long',
	});
	return `${monthLong} ${date.getFullYear()}`;
};

export const Header = ({ firstLane }) =>
	firstLane.map((item, index) => {
		const formattedDateHeader = formatDateHeader(
			item.start
		);
		return formattedDateHeader !==
			formatDateHeader(firstLane[index - 1]?.start) ? (
			<div
				key={item.id}
				className="header"
				style={{ gridRow: 1 }}
			>
				{formattedDateHeader}
			</div>
		) : (
			<div key={item.id}></div>
		);
	});
