// Variables for buttons
const btnL = document.getElementById('btnL');
const btnR = document.getElementById('btnR');
const slider = document.querySelector('.slider');
let offset = 0;
// Variables for dot buttons (pagination)
const dotL = document.getElementById('dotL');
const dotC = document.getElementById('dotC');
const dotR = document.getElementById('dotR');

// Removed .active classes to run by setTimeout (if there is pushing)
/*
После клика по кнопке (btnL/btnR), к ней добавляется класс active 
(см. 20ст.). Кнопка становится активной (меняет фоновый цвет).
Одновременно запускается метод-таймер setTimeout.
Который в свою очердь ативирует с задержкой функцию removeActive. 
После некоторой задержки (в данном случае 400 мс),
функция removeActive удаляет класс active у соответстаующей кнопки.
Синтаксис прямого запуска функции внутри метода setTimeout(плохая практика):
setTimeout(function() 
	{btnR.classList.remove('active');},
	400);
Грамотнее при задержке вызова функции ссылаться на её имя.
*/

// Removed class .active with run setTimeot metod
function removeActive() {
	btnL.classList.remove('active');
	btnR.classList.remove('active');
};

// Left button
// Условия перемещение слайдера по клику на левую кнопку
btnL.addEventListener('click', () => {
	btnL.classList.add('active');
	// величина смещения вправо (ширина изобр.+отступы)
	offset -= 105;
	if (offset < 0){
		offset = 630;
	};

	// Исполнительная функция (перемещение)
	slider.style.left = -offset + 'px';
	// Запуск функции removeActive с задержкой 400 мс
	setTimeout(removeActive, 400);
});

// Right button
btnR.addEventListener('click', () => {
	btnR.classList.add('active');
	offset += 105;
	if (offset > 630){
		offset = 0;
	};

	slider.style.left = -offset + 'px';
	setTimeout(removeActive, 400);
});


// DOTS BUTTON
// Get buttons to collection 
// Get left dot button to const dotBtnL
const dotBtnL = document.querySelectorAll('.slider-dot')[0];
console.log(dotBtnL);

// Get centr dot button to const dotBtnC
const dotBtnC = document.querySelectorAll('.slider-dot')[1];
console.log(dotBtnC);

// Get right dot button to const dotBtnR
const dotBtnR = document.querySelectorAll('.slider-dot')[2];
console.log(dotBtnR);

// Remove class active to slider-dot buttons
function rmDotActive() {
	dotBtnC.classList.remove('active');
};

// Left pagination handler
dotBtnL.addEventListener('click',() =>{
	dotBtnL.classList.add('active');
	offset -= 210;
	if (offset < 0){
		offset = 0;
	};
	slider.style.left = -offset + 'px';
	setTimeout(rmDotActive, 200);	
});

// Center pagination handler
dotBtnL.addEventListener('click',() =>{
	dotBtnL.classList.add('active');
	offset -= 210;
	if (offset < 0){
		offset = 0;
	};
	slider.style.left = -offset + 'px';
	setTimeout(rmDotActive, 200);	
});



