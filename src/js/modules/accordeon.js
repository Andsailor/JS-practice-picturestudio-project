const accordeon = () => {
    const accTrigger = document.querySelectorAll('.accordion-heading span'),
          accItem = document.querySelectorAll('.accordion-block');

    accItem.forEach(item => {
        item.style.display = 'none';
    });

    accTrigger.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            accTrigger.forEach(item => {
                item.classList.remove('ui-accordion-header-active', 'active-style');
                accTrigger[i].classList.add('ui-accordion-header-active', 'active-style');
            });              
            accItem.forEach(item => {
                item.classList.add('animated', 'fadeInDown');
                item.style.display = 'none';
                accItem[i].style.display = 'block';
            });

        });
    });
};


export default accordeon;