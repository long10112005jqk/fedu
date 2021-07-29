document.addEventListener("DOMContentLoaded",function(){
	var navbar = document.querySelector('.navbar');
	var navitem = document.getElementsByClassName('nav-item');
	window.addEventListener('scroll',function() {
		if (window.pageYOffset > 200) 
		{
			navbar.classList.add('BackgroundMenuScroll');
		}
		else {
			navbar.classList.remove('BackgroundMenuScroll');
		}
	})
	for (var i = 0; i < navitem.length; i++) {
		navitem[i].addEventListener('click',function() {
			for (var j = 0; j < navitem.length; j++) {
				if (navitem[j] != this) 
				{
					navitem[j].classList.remove('active');
				}
				else 
				{
					navitem[j].classList.add('active');
				}
			}
		})
	}
},false)