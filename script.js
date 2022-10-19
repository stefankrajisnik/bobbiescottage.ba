// LOAD FIRST SLIDE AFTER CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
    loadSpiner();
    
    const slides = [
        {
            imagePath: "/static/images/fire-pit.jpg",
            smallInBig: "ROMANIJA",
            bigText: "go out to the wild and wind",
            smallText: "Romanija is a mountain that is widely known for its clean air due to the large coverage of pine forest."
        },
        {
            imagePath: "/static/images/bobbie.jpg",
            smallInBig: "Bobbie's Cottage",
            bigText: "Enjoy at the wooden house",
            smallText: "Za ljubitelje prirode, uživanje i aktivan odmor."
        },
        {
            imagePath: "/static/images/306726017_606303711241264_5128755181197763427_n.jpg",
            smallInBig: "ACTIVITIES",
            bigText: "Enjoy at the the activities on fresh air",
            smallText: "You have to reward yourself and enjoy at the various activities in nature"
        }
    ];

    // SLIDE TO SECOND SECTION

    const downArrow = document.querySelector('.arrow-down')
    const topSection = document.querySelector('.top-section')
    downArrow.addEventListener('click', () => {
        topSection.style.transform = 'translateY(-100vh)'
    });


    // CHANGING SLIDES ON LEFT AND RIGHT BUTTON

    const btnLeft = document.querySelector('.fa-angle-left');
    const btnRight = document.querySelector('.fa-angle-right');

    let index = 0;

    function showNextSlide() {
        index++;
        loadSlide(slides[index]);
    }

    function showPreviousSlide() {
        index--;
        loadSlide(slides[index]);
    }

    function startFromZero() {
        index = 0;
        loadSlide(slides[index]);
    }

    function startFromEnd() {
        index = slides.length - 1;
        loadSlide(slides[index]);
    }

    btnRight.addEventListener('click', () => {

        if (index !== slides.length - 1) {
            console.log(`index is not ZERO, index was ${index}`);

            showNextSlide();
        } else {
            startFromZero();
        }
    });

    btnLeft.addEventListener('click', () => {

        if (index !== 0) {
            showPreviousSlide();
        } else {
            startFromEnd();
        }
    });

    const loadSlide = slide => {
        const img = document.querySelector('.single-slide');
        const smallInBigText = document.querySelector('.small-in-big');
        const bigText = document.querySelector('.big-text');
        const smallText = document.querySelector('.small-text');

        img.style.backgroundImage = `url(${slide.imagePath})`;
        smallInBigText.innerText = slide.smallInBig;
        bigText.innerText = slide.bigText;
        smallText.innerText = slide.smallText;
    }

    loadSlide(slides[0]);
});


const loadSpiner = () => {
    const text = document.querySelector('.circle-text p');

    // split the text into letters and put them into the span elements
    text.innerHTML = text.innerText.split('').map((letter, i) =>
        `<span class="span">${letter}</span>`
    ).join('');

    // grab all spans and make them rotate 
    const allSpans = document.querySelectorAll('span');
    allSpans.forEach((span, idx) => {
        span.style.transform = `rotate(${idx * 11.5}deg)`
    });
}
