"use strict"
//Відкриваюче,закриваюче меню із допомогою Esc
const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}
document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape'){
		menuBody.classList.remove('_active');
	}
});
//Лічильник 
const txtItem = document.querySelector('.menu__search');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.search__counter span');
txtCounter.innerHTML = txtItemLimit;

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}
txtItem.addEventListener('keyup', txtSetCounter);
txtItem.addEventListener('keydown', function(event){
	if (event.repeat) txtSetCounter();
});
