const text = document.querySelector('.circle-text p');

// split the text into letters and put them into the span elements
text.innerHTML = text.innerText.split('').map((letter,i) => 
     `<span class="span">${letter}</span>`
).join('');

// grab all spans and make them rotate 
const allSpans = document.querySelectorAll('span');
allSpans.forEach((span,idx) => {
    span.style.transform = `rotate(${idx * 11.5}deg)`
})


const downArrow = document.querySelector('.arrow-down')
const topSection = document.querySelector('.top-section')
downArrow.addEventListener('click', ()=> {
    topSection.style.transform = 'translateY(-100vh)'
});


const btnLeft = document.querySelector('.fa-angle-left');
const btnRight = document.querySelector('.fa-angle-right');
let slides = document.querySelectorAll('.single-slide');
let index = 0;
let currentSlide = slides[index];

function setCurrentSlide() {
    currentSlide = slides[index];
}

function showNextSlide() {
    currentSlide.classList.remove('show');
    index++;
    setCurrentSlide()
    currentSlide.classList.add('show');
}

function showPreviousSlide() {
    currentSlide.classList.remove('show');
    index--;
    setCurrentSlide()
    currentSlide.classList.add('show');
}

function startFromZero() {
    currentSlide.classList.remove('show');
    index = 0;
    setCurrentSlide()
    currentSlide.classList.add('show');
}

function startFromEnd() {
    currentSlide.classList.remove('show');
    index = slides.length - 1;
    setCurrentSlide()
    currentSlide.classList.add('show');
}

btnRight.addEventListener('click', () => {
    
    if(index !== slides.length - 1){
        console.log(`index is not ZERO, index was ${index}`)

        showNextSlide()
    }else {
        startFromZero()
    }
})

btnLeft.addEventListener('click', () => {
   
    if(index !== 0) {
        showPreviousSlide()
    } else {
        startFromEnd()
    }
})
