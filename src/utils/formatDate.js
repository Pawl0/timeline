export const formatDate = (date) => {
	const stringDate = new Date(date).toString();
	const [_, month, day] = stringDate.split(' ');
	return `${month} ${day}`;
};
