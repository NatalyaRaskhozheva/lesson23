function sort(array) {
	let startBulb = new Date()
	let changed
	let swap = 0
	do {
		changed = false
		for (let i = 1; i < array.length; i++) {
			if (array[i - 1] > array[i]) {
				let tmp = array[i - 1]
				array[i - 1] = array[i]
				array[i] = tmp
				swap++
				changed = true
			}
		}
	} while (changed === true);
	let endBulb = new Date()
	let timeBulb = endBulb - startBulb
	let startInsert = new Date()
	let key, i
	let swap1 = 0
	for (let k = 1; k < array.length; k++) {
		key = array[k]
		i = k - 1
		while ((i >= 0) && (array[i] > key)) {
			array[i + 1] = array[i]
			i = i - 1
			swap1++
		}
		array[i + 1] = key
	}
	let endInsert = new Date()
	let = timeInsert = endInsert - startInsert
	if (timeBulb < timeInsert) return 'Бульбашка швидше'
	else return 'Вставка швидше'
}

function createArray(number) {
	let arr = []
	for (let i = 0; i < number; i++) {
		let randomItem = Math.floor(Math.random() * (800 - 1) + 1)
		arr.push(randomItem)
	}
	return arr
}
const number = 1000
const array = createArray(number)

let sort1 = sort(array)
alert(sort1)