// Option 2

var jumboHeight = $('.paralax-up').outerHeight();
var obj = document.getElementById('paralax-bg');
var h;

function onScroll() {

	h = jumboHeight - window.scrollY;
	if (h < 0) {
		h = 0;
	}
	obj.style.height = h + 'px';

}

window.addEventListener('scroll', onScroll, false);