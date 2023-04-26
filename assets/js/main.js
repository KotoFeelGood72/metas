


gsap.registerPlugin(ScrollTrigger);
let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	modal();
});


$(window).on('load', function () {
	updateSizes();
	loadFunc();
	animatedLabelForInput();
	if(prodSlider) {
		animatedCursor();
	}
	
	if(windowWidth > mediaPoint1) {
		loader();
		animateStart();
		allDefautAnim();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}




let randomAlert = true
const btnSubmit = document.querySelectorAll('input[type="submit"]')
Array.from(btnSubmit).map((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		if(randomAlert) {
			succes('.success')
			randomAlert = false
		} else {
			failed('.failed')
			randomAlert = true
		}
	})
})



function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})








function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}



function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	initSliderPopup();
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			popup.forEach((el) => {
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}


$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})





const prodSlider = new Swiper('.production_slider', {
	speed: 700,
	loop: true,
	navigation: {
		nextEl: '.prod-next',
		prevEl: '.prod-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3.5,
			centeredSlides: true,
			centeredSlidesBounds: true,
		}
	}
})

const revSlider = new Swiper('.reviews_slider', {
	speed: 700,
	navigation: {
		nextEl: '.rev-next',
		prevEl: '.rev-prev',
	},
	pagination: {
		el: '.reviews_pagination',
		dynamicBullets: true, //включаем поддержку динамических буллетов
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 160,
		}
	}
})

if(revSlider) {
	showMoreText();
}

function showMoreText() {
	let showMoreBlock = document.querySelectorAll('.showMoreBlock')
	Array.from(showMoreBlock).map((item) => {
		let showMoreBtn = item.querySelector('.showMoreBtn')
		let showMoreTxt = item.querySelector('.showMoreTxt')

		showMoreBtn.addEventListener('click', function() {
			showMoreTxt.classList.toggle('visible')
			if (showMoreTxt.classList.contains('visible')) {
        this.innerHTML = 'Скрыть';
      } else {
        this.innerHTML = 'Показать больше';
      }
		})
	})
}





function animatedLabelForInput() {
	let inputs = document.querySelectorAll('.animated-input');
	inputs.forEach(input => {
		let thisInput = input
		let thisField = input.parentElement

		thisInput.onfocus = function() {
      thisField.classList.add('is-focused');
    };

    thisInput.onblur = function() {
      activeField( thisInput, thisField );
      thisField.classList.remove('is-focused');
    };

    thisInput.oninput = function() {
      activeField( thisInput, thisField );
    };
	});

	function activeField( element, field ) {
    if ( element.value )
      field.classList.add('is-active');
    else
      field.classList.remove('is-active');
  }
}


function initSliderPopup() {
	const serviceSlider = new Swiper('.servicePopup_slider', {
		speed: 700,
		navigation: {
			nextEl: '.popup-next',
			prevEl: '.popup-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			}
		}
	})

	serviceSlider.init();
}


function visibleEl(el, dur, delay) {
	const item = document.querySelectorAll(`.${el}`)
	if(item) {
		const itemAnimate = gsap.to(item, {
			x: 0,
			autoAlpha: 1,
			duration: dur,
			ease: "power4.out",
			delay: delay,
			stagger: .4
	});
	}
}




function animateStart() {
		visibleEl('header_col--right, .header_contacts, .hero_title_w, .hero_txt, .social-list>li', 1, .5)
}



function allDefautAnim(bottom = false, start = '-=30% center', end = 'bottom') {
	const animationList = Array.from(document.querySelectorAll('.sec_anim')).map(function(el) {
		const arr = Array.from(el.querySelectorAll('.el_anim')).map(function (item, index) {
			const tl = gsap.timeline();
			ScrollTrigger.create({
				animation: tl,
				trigger: el,
				start: start,
				end: end,
				ease: 'none',
				// markers: true,
			})
			tl.fromTo(item, {
				y: 100, 
				duration: .4,
				autoAlpha: 0,
			}, {
				y: 0,
				autoAlpha: 1,
				delay: 0.2 + (0.2 * index),
			});
		});
	});
}




function loader() {

	const loader = document.querySelector('.loader')

	loader.classList.add('hidden')
}


$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if( scrolled > 107 ) {
			$('.header').addClass('fixed');
	}   
	if( scrolled <= 107 ) {     
			$('.header').removeClass('fixed');
	}
});

const menuLinks = document.querySelectorAll('nav li a');
function highlightActiveMenuItem() {
const scrollPosition = window.scrollY;
menuLinks.forEach((link) => {
	const targetElement = document.querySelector(link.hash);
	if (targetElement.offsetTop <= scrollPosition + 200 && targetElement.offsetTop + targetElement.offsetHeight > scrollPosition + 200) {
		link.closest('li').classList.add('active');
	} else {
		link.closest('li').classList.remove('active');
	}
});
}

window.addEventListener('load', highlightActiveMenuItem);
window.addEventListener('scroll', highlightActiveMenuItem);

function smoothScrollTo(target) {
const startPosition = window.pageYOffset;
const targetPosition = target.offsetTop;
const distance = targetPosition - startPosition;
const duration = 500;
let start = null;

function step(timestamp) {
	if (!start) start = timestamp;
	const progress = timestamp - start;
	const scrollY = startPosition + distance * (progress / duration);
	window.scrollTo(0, scrollY);
	if (progress < duration) window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
}
$(document).ready(function() {
	menuLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			const target = document.querySelector(link.hash);
			smoothScrollTo(target);
		});
	});
})












































// function customCursor()  {
// 	// CURSOR
// 	var cursor = $(".cursor")
	
// 	var posX = 0,
// 			posY = 0;
	
// 	var mouseX = 0,
// 			mouseY = 0;
	
// 	TweenMax.to({}, 0.012, {
// 		repeat: -1,
// 		onRepeat: function() {
// 			posX += (mouseX - posX) / 24;
// 			posY += (mouseY - posY) / 24;
	
	
// 			TweenMax.set(cursor, {
// 					css: {
// 					left: mouseX,
// 					top: mouseY
// 					}
// 			});
// 		}
// 	});
	
// 	$(document).on("mousemove", function(e) {
// 			mouseX = e.clientX;
// 			mouseY = e.clientY;
// 	});
// 	// yellow circle
// 	const el = document.querySelectorAll('.production-slide');
// 	cursor.addClass("visible")
// 	el.forEach((item) => {
// 		item.addEventListener('mouseover', function() {
// 			cursor.addClass("active")
// 		})
// 		item.addEventListener('mouseout', function() {
// 			cursor.removeClass("active");
// 		})
// 	})
// 	}



function animatedCursor() {
	let mouseCursor = document.querySelector(".cursor");
	let triggerCursor = document.querySelectorAll(".production_slider");

	window.addEventListener("mousemove", cursor);

	function cursor(e){
		gsap.to(mouseCursor, 0.2, {
			x: e.clientX,
			y: e.clientY
		});
	}

	triggerCursor.forEach(link => {
		link.addEventListener("mouseover", ()=>{
			mouseCursor.classList.add("active");
		});

		link.addEventListener("mouseleave", ()=>{
			mouseCursor.classList.remove("active");
		});
	});
}

