import React from 'react';
import { monthColumns } from '../../utils/mothColumns';
import { monthColors } from '../../utils/monthColors';
import { formatDate } from '../../utils/formatDate';
import './card.css';

export const Card = ({ item, rowIndex }) => {
	const startDate = formatDate(item.start);
	const endDate = formatDate(item.end);
	const [startMonth] = startDate.split(' ');
	return (
		<div
			className="card-container"
			style={{
				gridColumn: monthColumns[startMonth],
				gridRow: rowIndex + 2,
			}}
		>
			<div
				className="card"
				style={{
					background: monthColors[startMonth],
				}}
			>
				<label className="card-title">{item.name}</label>
				<label>
					{startDate} {' - '}
					{endDate}
				</label>
			</div>
		</div>
	);
};
