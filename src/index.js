import React from 'react';
import ReactDOM from 'react-dom/client';
import timelineItems from './timelineItems.js';
import { assignLanes } from './assignLanes.js';
import { Calendar, Card } from './components';
import './app.css';

const lanes = assignLanes(timelineItems);

function App() {
	return (
		<div className="container">
			<h1>Calendar</h1>
			<Calendar lanes={lanes}>
				{lanes.map((lane, rowIndex) =>
					lane.map((item) => (
						<Card
							key={item.id}
							rowIndex={rowIndex}
							item={item}
						/>
					))
				)}
			</Calendar>
		</div>
	);
}

const root = ReactDOM.createRoot(
	document.getElementById('root')
);
root.render(<App />);
