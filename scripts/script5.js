//Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
// let rusultListNumber = []

// if(/[0-9]/.test(strList)){
// 	for (const str of strList) {
// 		if(/[0-9]/.test(str)) rusultListNumber.push(`${str}/`)
// 	}
// }else alert('not')

// alert(rusultListNumber)

//Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
// let rusultListNotNumber = []

// if (/\D/.test(strList)) {
// 	for (const str of strList) {
// 		if (/^\D*$/.test(str)) rusultListNotNumber.push(`${str}/`)
// 	}
// } else alert('not')

// alert(rusultListNotNumber)

//Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

// let resultListLoud = []
// if (/[a,o,i,u,y,e]/.test(strList)) {
// 	for (const str of strList) {
// 		if (/[a,o,i,u,y,e]/.test(str)) resultListLoud.push(`${str}/`)
// 	}
// } else alert('not')
// alert(resultListLoud)

//Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.

// let resultListNotLoud = []
// if (/[aoiuye]/.test(strList)) {
// 	for (const str of strList) {
// 		if (/^[^aoiuye]*$/.test(str)) resultListNotLoud.push(`${str}/`)
// 	}
// } else alert('not')
// alert(resultListNotLoud)

//Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

// let resultListNumber0neOrThree = []
// if (/(1|3)/.test(strList)) {
// 	for (const str of strList) {
// 		if (/(1|3)/.test(str)) resultListNumber0neOrThree.push(`${str}/`)
// 	}
// } else alert('not')
// alert(resultListNumber0neOrThree)

//Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

// let str = 'He did this because a young blind viewer once asked him to do so. She wanted to know the fish were OK.2. Boring, Oregon, and Dull, Scotland, have been sister cities since 2012.In 2017, they added Bland Shire, Australia, to their “League of Extraordinary Communities.3. Amelia Earhart and Eleanor Roosevelt once sneaked out of a White House event and commandeered an airplane.'
// if (/\d+/.test(str)) {
// 	let numberList = str.match(/\d+/g)
// 	alert(numberList)
// }
// else alert('no')

//Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

// let str = 'He did this because a young blind viewer once asked him to do so. She wanted to know the fish were OK.2. Boring, Oregon, and Dull, Scotland, have been sister cities since 2012.In 2017, they added Bland Shire, Australia, to their “League of Extraordinary Communities.3. Amelia Earhart and Eleanor Roosevelt once sneaked out of a White House event and commandeered an airplane?'
// 	let numberList = str.match(/\W\s/g)
// 	console.log(numberList)



//Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
// let str = 'He did this because a young blind, viewer once asked, him to do so. She wanted to know the fish were OK.'
// let newStr = str.split(/\W\s/g)
// console.log(newStr)

//Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
// let str = 'I born 27.01.1999'
// if (/\b\d{2}\W\d{2}\W\d{4}\b/.test(str)) {
// 	let list = str.match(/\b\d{2}\W\d{2}\W\d{4}\b/g)
// 	alert(list)
// } else alert('not ok')

//Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
// let str = 'fh 78 olou 1999 klo 90 rtg'
// let newStr = str.split(/\W/g)
// let count = 0
// for (const strO of newStr) {
// 	if (/\b\d{2}\b/.test(strO)) count++
// }
// alert(count)

//Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
// let str = 'My carts 5667-5643-2356-6789 and 8909-6789-4512-4267'
// if(/\b\d{4}\-\d{4}\-\d{4}\-\d{4}\b/.test(str)){
// 	let list = str.match(/\b\d{4}\-\d{4}\-\d{4}\-\d{4}\b/g)
// 	document.write(list)
// }

//Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
// let url = 'https://test.gow'
// if (url.toLocaleLowerCase().endsWith('gow')) alert('ok')
// else alert('no')

//Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
// let str = 'Kodfs 2021 ji 2027 dfgdg 2045'
// if(/\b20\d{2}\b/.test(str)){
// 	let list = str.match(/\b20\d{2}\b/g) 
// 	document.write(list)
// }
// else alert('not')

//Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
// let url = '+380986719428'
// if (url.toLocaleLowerCase().startsWith('+380')) alert('ok')
// else alert('no')

//Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл. Замінити пробіл на дефіс.
// let nameUser = 'Mister Semka'
// nameUser = nameUser.replace(' ', '-')
// document.write(nameUser)

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
// let dateUser = '14.03.2014'
// dateUser = dateUser.replaceAll('.', '/')
// document.write(dateUser)

//Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
let userInfo = prompt('Введіть день')
if(/[0,6]|sun|sat/.test(userInfo))alert('Вихідний')
else alert('не вихідний')
