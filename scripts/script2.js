function getTerm(yearCreateArticle, monthCreateArticle, dayCreateArticle, yearTermArticle, monthTermArticle, dayTermArticle) {
	const createDay = new Date(yearCreateArticle, monthCreateArticle, dayCreateArticle)
	const termDay = new Date(yearTermArticle, monthTermArticle, dayTermArticle)
	const currenrDate = new Date()
	const term = termDay - createDay
	const nowTerm = currenrDate - createDay

	if (nowTerm <= term) return 'Товар придатний' 
	else return 'Товар не придатний'
}
let yearCreateArticle = parseInt(prompt('Рік виготовлення'))
let monthCreateArticle = parseInt(prompt('Місяць виготовлення'))
let dayCreateArticle = parseInt(prompt('День виготовлення'))

let yearTermArticle = parseInt(prompt('Рік закінчення терміну придатності'))
let monthTermArticle = parseInt(prompt('Місяць закінчення терміну придатності'))
let dayTermArticle = parseInt(prompt('День закінчення терміну придатності'))

const message = getTerm(yearCreateArticle, monthCreateArticle, dayCreateArticle, yearTermArticle, monthTermArticle, dayTermArticle)
alert(message)

