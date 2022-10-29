import { getRequest } from "../services/requests";

const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, calcForm) => {
    const size = document.querySelector(sizeSelector),
          sizeInputs = document.querySelectorAll('#size option'),
          material = document.querySelector(materialSelector),
          materialInputs = document.querySelectorAll('#material option'),
          option = document.querySelector(optionsSelector),
          optionInputs = document.querySelectorAll('#options option'),
          promocode = document.querySelector(promocodeSelector),
          result = document.querySelector(resultSelector);
    
    let sum = 0; 

    function createValue(respond, input, i) {
        let arr = [];
        
        for (let key in respond.prices[i]) {
            arr.push(respond.prices[i][key]);
        }

        for (let j = 1; j < input.length; j++) {
            input[j].value = arr[j-1];
        }
    }

    const calcFunc = () => {
        getRequest('assets/db.json')
        .then(result => {
            createValue(result, sizeInputs, 0);
            createValue(result, materialInputs, 1);
            createValue(result, optionInputs, 2);
        });

        sum = Math.round((+size.value) * (+material.value) + (+option.value));

        if (size.value === '' || material.value === '') {
            result.textContent = 'Пожалуйста выберите размер и материал картины';
        } else if (promocode.value === 'IWANTPOPART') {
            result.textContent = Math.round(sum * 0.7);
        } else {
            result.textContent = sum;
        }

    };

    size.addEventListener('change', function() {
        calcFunc();
        calcForm.size = size.options[size.selectedIndex].text;
    } );
    material.addEventListener('change', function() {
        calcFunc();
        calcForm.material = material.options[material.selectedIndex].text;
    });
    option.addEventListener('change', function() {
        calcFunc();
        calcForm.option = option.options[option.selectedIndex].text;
    });
    promocode.addEventListener('input', function() {
        calcFunc();
        calcForm.promocode = promocode.value;
        calcForm.price = result.textContent;
    });
};

export default calc;