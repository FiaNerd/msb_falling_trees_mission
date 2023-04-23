// Variables
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const imgs = document.querySelectorAll('.carousel-img') as NodeListOf<HTMLImageElement>
const dots = document.querySelectorAll('.dot') as NodeListOf<HTMLSpanElement>
const slides = document.querySelectorAll('.carousel-ovaraly') as NodeListOf<HTMLSpanElement>
const totalImgs = imgs.length;
let imgPosition = 0;

const imgElement = Array.from(imgs)
const dotSpanElement = Array.from(dots)
const slideSpanElement = Array.from(slides)


export const updatePosition = (dotPosition?: number) => {
	imgElement.map(imgs => {
	  imgs.classList.remove('visible')
	  imgs.classList.add('hidden')
	})

	imgs[dotPosition || imgPosition].classList.remove('hidden')
	imgs[dotPosition || imgPosition].classList.add('visible')

	dotSpanElement.map(dot => {
	  dot.className = dot.className.replace(" active", "");
	})

	dots[dotPosition || imgPosition].classList.add('active');

	slideSpanElement.map(dot => {
	  dot.classList.remove('visible')
	  dot.classList.add('hidden')
	})

	slideSpanElement[dotPosition || imgPosition].classList.remove('hidden')
	slideSpanElement[dotPosition || imgPosition].classList.add('visible')
  }

  export const nextImg = () =>{
	if (imgPosition === totalImgs -1){
	  imgPosition = 0;
	} else{
	  imgPosition++;
	}
	updatePosition();
  }

  export const prevImg = () => {
	if (imgPosition === 0){
	  imgPosition = totalImgs-1;
	} else{
	  imgPosition--;
	}
	updatePosition();
  }

  dots.forEach((dot, dotPosition) => {
	dot.addEventListener("click", () => {
	  updatePosition(dotPosition)
	})
  })

  next!.addEventListener('click', () => {
	nextImg();
  })

  prev!.addEventListener('click', () => {
	prevImg();
  })
