export const getFormattedDate = (date: string): string[] => {
	const [datePart, timePart] = date.split('T')
	const formattedTime = timePart.split('.')[0]
	return [datePart, formattedTime]
}
