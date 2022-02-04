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
*/
/*
function removeActive () {
	btnL.classList.remove('active');
	btnR.classList.remove('active');
};
*/
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
	// Передача фцнкции activ с задержкой 400 мс
	//setTimeout(removeActive, 400);
	// Прямой запуск функции из метода
	setTimeout(function() 
	{btnL.classList.remove('active');},
	400);
});

btnR.addEventListener('click', () => {
	btnR.classList.add('active');
	offset += 105;
	if (offset > 630){
		offset = 0;
	};

	slider.style.left = -offset + 'px';
	//setTimeout(removeActive, 400);
	setTimeout(function() 
	{btnR.classList.remove('active');},
	400);
});

/*
let collections = document.querySelectorAll('.slider__item');
console.log(collections);
*/