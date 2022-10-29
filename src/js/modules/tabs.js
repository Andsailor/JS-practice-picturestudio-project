const tabs = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';

    items.forEach((item, i) => {
        item.addEventListener('click', () => {
            items.forEach(item => {
                item.classList.remove('active');
                items[i].classList.add('active');
            });
        });
    });
    

    const filter = (type) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (type) {
            type.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    }; 

    const toFilter = (selector) => {
        menu.querySelector(selector).addEventListener('click', () => {
            if (selector ==='.grandmother' || selector ==='.granddad') {
                filter();
            } else {
                filter(wrapper.querySelectorAll(selector));
            }
            
        });
    };

    toFilter('.all');
    toFilter('.lovers');
    toFilter('.chef');
    toFilter('.girl');
    toFilter('.guy');
    toFilter('.grandmother');
    toFilter('.granddad');

};

export default tabs;