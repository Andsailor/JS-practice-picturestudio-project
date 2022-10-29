const modal = () => {

    let pressedButton = false;

    function bindModal (openTrigger, modalSelector, closeTrigger) {
        const open = document.querySelectorAll(openTrigger),
              modalWindow = document.querySelector(modalSelector);  
    
        function showModal() {
            modalWindow.style.display = 'block';
            modalWindow.style.overflow = 'hidden';
            modalWindow.classList.add('animated', 'fadeIn');
        }

        function hideModal() {
            modalWindow.style.display = 'none';
            modalWindow.style.overflow = '';
        }

        open.forEach(item => {
            item.addEventListener('click', () => {  
                pressedButton = true;
                if (item.matches('.fixed-gift')) {
                    item.remove();
                    showModal();
                } else {
                    showModal();
                }          
            });
        });

        document.body.addEventListener('click', (e) => {
            if (e.target === modalWindow || e.target.matches(closeTrigger)) {
                hideModal();
            }
        });
    }
    

    function showModalByTime(time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display != 'none') {
                    display = "block";
                }
        });

        if (!display) {
            document.querySelector('.popup-consultation').style.display = 'block';
            document.querySelector('.popup-consultation').classList.add('animated', 'fadeIn');
        }
        }, time);              
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset + document.documentElement.clientHeight;
            if (pressedButton === false && scrollTop  >= document.body.offsetHeight) {
                document.querySelector(selector).click();
            }
        });
   }

   bindModal('.button-design', '.popup-design', '.popup-close');
   bindModal('.button-consultation', '.popup-consultation', '.popup-close');
   bindModal('.fixed-gift', '.popup-gift', '.popup-close');  
   openByScroll('.fixed-gift');
    showModalByTime(3000);
};

export default modal;
