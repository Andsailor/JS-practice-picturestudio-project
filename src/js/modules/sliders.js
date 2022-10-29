const slider = (slideItems, dir, prev, next) => { 
    let slideIndex = 1,
        paused = false;
    const slide = document.querySelectorAll(slideItems);         

    function showSlides(n) {
        if (n > slide.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slide.length;
        }

        slide.forEach(item => {
            item.classList.add("animated");
            item.style.display = 'none';
        });

        slide[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            changeSlide(-1);
            slide[slideIndex - 1].classList.remove('slideInLeft');
            slide[slideIndex - 1].classList.add('slideInRight');
        
        });

        nextBtn.addEventListener('click', () => {
            changeSlide(1);
            slide[slideIndex - 1].classList.remove('slideInRight');
            slide[slideIndex - 1].classList.add('slideInLeft');
        });

    } catch(e) {}

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function() { 
                changeSlide(1);
                slide[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        }  else {
            paused = setInterval(function() { 
                changeSlide(1);
                slide[slideIndex - 1].classList.remove('slideInRight');
                slide[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    slide[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slide[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

    activateAnimation();

    
};
 

export default slider;