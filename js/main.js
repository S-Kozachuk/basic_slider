const btnL = document.getElementById('btnL');
const btnR = document.getElementById('btnR');
const slider = document.querySelector('.slider');
let offset = 0;

// Removed .active classes to run by setTimeout (if there is pushing)
/*
После клика по кнопке (btnL), к ней добавляется класс active 
(см. 20ст.), меняющий её цвет (делает кнопку активной). 
Затем класс active удаляется после некоторой задержки 
(в данном случае 400 мс), указанной в методе setTimeout.
*/
function activ () {
	btnL.classList.remove('active');
	btnR.classList.remove('active');
};

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
	setTimeout(activ, 400);
});

btnR.addEventListener('click', () => {
	btnR.classList.add('active');
	offset += 105;
	if (offset > 630){
		offset = 0;
	};

	slider.style.left = -offset + 'px';
	setTimeout(activ, 400);
});

/*
let collections = document.querySelectorAll('.slider__item');
console.log(collections);
*/