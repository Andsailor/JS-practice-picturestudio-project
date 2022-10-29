import { sendRequest } from "../services/requests";

const form = (state) => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'assets/img/spinner.gif',
        error: 'К сожалению, что-то пошло не так...',
        succes: 'Заявка успешно отправлена. Ожидайте обратной связи.',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };


   const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });

        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
         
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            const arr = item.files[0].name.split('.');
            let dots;
            arr[0].length > 7 ?
            dots = '...':
            dots = '.';
            const name = arr[0].substring(0, 8) + dots + arr[1];
            item.previousElementSibling.textContent = name;        
        });
    });


    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let status = document.createElement('div');
            status.classList.add('status', 'animated', 'fadeIn');
            status.innerHTML = `
            <img src=${message.loading} alt>`;
            item.appendChild(status);

            const formData = new FormData(item); 
            
            if (item.matches('.calc_form')) {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            let postPath;

            item.closest('.popup-design') || item.classList.contains('calc_form') ?
             postPath = path.designer :
             postPath = path.question;
            
            sendRequest(postPath, formData)

            .then(result => {
            console.log(result);
            status.innerHTML = `${message.succes} <img src=${message.ok} alt>`;
            item.parentNode.replaceChild(status, item);})

            .catch(error => {
                console.log(error);
                status.innerHTML = `${message.error} <img src=${message.fail} alt>`;
                item.parentNode.replaceChild(status, item)
                ;})

            .finally(
                setTimeout(() => {
                clearInputs();
                item.classList.add('animated', 'fadeIn');
                status.parentNode.replaceChild(item, status);
            },3000));
        });
    });
};


export default form;