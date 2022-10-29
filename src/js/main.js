import modal from './modules/modal';
import stylesFromDb from './modules/stylesFromDb';
import tabs from './modules/tabs';
import sliders from './modules/sliders';
import hover from './modules/hover';
import accordeon from './modules/accordeon';
import form from './modules/form';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import calc from './modules/calcucator';
import hamburger from './modules/hamburger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let calcForm = {};
    
    modal();
    stylesFromDb();
    tabs();
    hover();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');   
    sliders('.main-slider-item', 'vertical');
    accordeon();
    form(calcForm);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]'); 
    calc('#size', '#material', '#options', '.promocode', '.calc-price', calcForm);
    hamburger('.burger', '.burger-menu');
    scrolling('.pageup');
    drop();
}); 