"use strict"
//Задача №1
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
//Задача №2
let arrOne = ['Вася', 'Иштван'];
//додання 'Оля' в кінець масиву
arrOne.push('Оля');
//зміна значення 'Иштван' на 'Петя'
arrOne[1] = ('Петя');
//
console.log(arrOne.indexOf('Петя',1));
//видалення та виведення першого елемента масива
let removed = arrOne.splice(0,1);
console.log(removed);
//додавання "Маша" і "Паша" на початок масива
arrOne.unshift('Маша', 'Паша');
console.log(arrOne);
//Задача №3
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removedTwo = arrTwo.splice(1,1);
console.log(removedTwo);
//Задача №4
let str = 'Ваня, Иштван, Оля';
let arrNew = str.split(',');
console.log(arrNew);
//-------------------------------------------
//Задача №1
function showName() {
	console.log(`Вася`);
}
setTimeout(showName, 0);
console.log(`Коля`);
//Задача №4
let showMessage;
if (2 > 1) {
	showMessage = function() {
		console.log(`Повідомлення`);
	};
}
showMessage();
//-------------------------------------------
//Задача №1
const width = document.documentElement;
const mainWidth = width.clientWidth;
const windowWidth = window.innerWidth;
console.log(windowWidth - mainWidth);
//Задача №2
function setScrollTo() {
	window.scrollTo(
		{
			top: 100,
			left: 0,
			befavior: "smooth"
		}
	);
};
setTimeout(setScrollTo, 1000);
//Задача №3
const elemOne = document.querySelector('.second__item');
const getElemOne = elemOne.getBoundingClientRect();
console.log(getElemOne);
const elemTwo = document.querySelector('.second__item');
const getElemTwo = elemTwo.getBoundingClientRect();
console.log(getElemTwo);
const elemThree = document.querySelector('.second__item');
const getElemThree = elemThree.getBoundingClientRect();
console.log(getElemThree);
//Задача №1
const attr = document.querySelector('[data-say-hi]');
console.log(attr.dataset.sayHi);
//Задача №2
/*
const elemList = document.querySelector('.list');
const elemItem = elemList.lastElementChild;
console.log(elemItem);
*/
//Задача №3
const  itemsClass = document.getElementsByClassName('like');
console.log(itemsClass);
//Задача №4
/*
const listOne = document.querySelector('.list');
listOne.insertAdjacentHTML(
	'beforeend',
	'<li>Text</li>'
);
*/