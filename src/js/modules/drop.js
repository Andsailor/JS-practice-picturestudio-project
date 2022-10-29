import { sendRequest } from "../services/requests";

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    const createDots = (arg) => {
        const arr = arg.files[0].name.split('.');
            let dots;
            arr[0].length > 7 ?
            dots = '...':
            dots = '.';
            const name = arr[0].substring(0, 8) + dots + arr[1];
            arg.previousElementSibling.textContent = name;
    }

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(event => {
        fileInputs.forEach(item => {
            item.addEventListener(event, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    function clearHighlight(item) {
        if (item.closest('.file_upload').parentElement.matches('.calc_form')) {
            item.closest('.file_upload').style.border = 'none';
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else if (item.closest('.main')) {
            item.closest('.file_upload').style.border = 'none';
            item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
        } else {
            item.closest('.file_upload').style.border = 'none';
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(event => {
        fileInputs.forEach(item => {
            item.addEventListener(event, () => highlight(item), false);
        });
    });

    ['dragleave', 'drop'].forEach(event => {
        fileInputs.forEach(item => {
            item.addEventListener(event, () => clearHighlight(item), false);
        });
    });


    fileInputs.forEach(item => {
        item.addEventListener('drop', (e) => {
            item.files = e.dataTransfer.files;
 

            if (item.getAttribute('data') == 'post') {
                
                createDots(item);
                const pictureFormData = new FormData(item.parentElement);

                sendRequest('assets/server.php', pictureFormData)

                .then(setTimeout(() => {
                    item.previousElementSibling.textContent = 'Успешно отправлено!';
                    }, 2000))

                .catch(error => item.previousElementSibling.textContent = `Что-то пошло не так ${error}`)

                .finally(                   
                    setTimeout(() => {
                        item.previousElementSibling.textContent = 'Файл не выбран' ;
                    }, 4000)
                );
            } else {
                createDots(item);
            }           
        });
    });
};

export default drop;