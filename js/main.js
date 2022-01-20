const btnL = document.getElementById('btnL');
const btnR = document.getElementById('btnR');
const slider = document.querySelector('.slider-wrapper');
let offset = 0;

function activ () {
	btnL.className = "slider-prev";
	btnR.className = "slider-next";
};

btnL.addEventListener('click', () => {
	btnL.className = "active";
	offset -= 105;
	if (offset < 0){
		offset = 630;
	}

	slider.style.left = -offset + 'px';
	setTimeout(activ, 400);
});

btnR.addEventListener('click', () => {
	btnR.className = "active";
	offset += 105;
	if (offset > 630){
		offset = 0;
	}

	slider.style.left = -offset + 'px';
	setTimeout(activ, 400);
});