import { getRequest } from "../services/requests";

const stylesFromDb = () => {
    const triggerButton = document.querySelector('.button-styles'),
          wrapper = document.querySelector('.styles .row');

    triggerButton.addEventListener('click', function() {
        getRequest('assets/db.json')
        .then(result => createCards(result.styles))
        .catch(error => console.log(error));
        this.remove();
    });   
    
    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add("animated", "fadeInDown", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");

            card.innerHTML = `
            <div class=styles-block>
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
            </div>
            `;

            wrapper.append(card);
            
        });
    }
};

export default stylesFromDb; 
