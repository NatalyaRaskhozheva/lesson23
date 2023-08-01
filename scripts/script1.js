function getRestDay(date) {
	date.setDate(date.getDate() + 56)
	date.getDate()
	date.toString()
	return date
}
const message = getRestDay(new Date())
alert(message)