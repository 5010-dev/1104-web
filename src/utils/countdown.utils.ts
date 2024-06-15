export const calculateRemainingTime = (targetDate: Date): number => {
	const difference = targetDate.getTime() - Date.now()
	return difference > 0 ? difference : 0
}

export const calculateDays = (time: number): number => {
	return (time / (24 * 60 * 60 * 1000)) | 0
}

export const calculateHours = (time: number): number => {
	return ((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)) | 0
}

export const calculateMinutes = (time: number): number => {
	return ((time % (60 * 60 * 1000)) / (60 * 1000)) | 0
}

export const calculateSeconds = (time: number): number => {
	return ((time % (60 * 1000)) / 1000) | 0
}
