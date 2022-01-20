const btnL = document.getElementById('btnL');
const btnR = document.getElementById('btnR');
const slider = document.querySelector('.slider-wrapper');
let offset = 0;

function activ () {
	btnL.className = "slider-prev";
	btnR.className = "slider-next";
}
