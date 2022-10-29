const hover = () => {
    const imgBlock = document.querySelectorAll('.sizes-wrapper img');
          
    imgBlock.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            item.setAttribute('src', `assets/img/sizes-${i + 1}-1.png`);
            item.classList.add('animated', 'fadeIn');
            item.style.cssText = 'z-index: 3; position: relative';
        });

        item.addEventListener('mouseleave', () => {
            item.setAttribute('src', `assets/img/sizes-${i+1}.png`);
            item.classList.remove(('fadeIn'));
            item.style.cssText = 'z-index: 0;';
        });
    });
};

export default hover;
