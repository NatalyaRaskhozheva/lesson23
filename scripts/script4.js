function getExample(example) {
	let start = new Date()
	let userResult = prompt('4 + 5')
	let end = new Date()
	return (end.getSeconds() - start.getSeconds())
}


let example = 4 + 5
let newExample = getExample(example)
alert(newExample)
