const btnL = document.getElementById('btnL');
const btnR = document.getElementById('btnR');
const slider = document.querySelector('.slider');
let offset = 0;

// Added class for active button (if there is pushing)

function activ () {
	btnL.className = "slider-prev";
	btnR.className = "slider-next";
};

// Расчёт премещения и условия для левой кнопки
btnL.addEventListener('click', () => {
	btnL.classList.contains('active');
	offset -= 105;
	if (offset < 0){
		offset = 630;
	};
	console.log(slider);

	// Исполнительная функция (перемещение)
	slider.style.left = -offset + 'px';
	setTimeout(activ, 500);
});

btnR.addEventListener('click', () => {
	btnR.classList.add('active');
	offset += 105;
	if (offset > 630){
		offset = 0;
	};

	slider.style.left = -offset + 'px';
	setTimeout(activ, 500);
});