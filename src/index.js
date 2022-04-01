import './style/style.scss';
import {Burger} from './js/burger.js';
import {Catalog} from './js/products.js';


window.addEventListener('load', ()=>{
    const burger = new Burger('.burger-button','.navigation__list');
    const catalog = new Catalog('.main');
    burger.closeMenu()
    document.addEventListener('click', handleClick)

    function handleClick(event){
        const target = event.target;
        if(event.target.closest('.burger-button')){
            burger.handleClickOnBurger();
            return;
        }else{
            if(burger.isMenuOpen){
                burger.closeMenu();
            }
        }

        if (event.target.closest('.catalog__category')) {
            const category = event.target.closest('.catalog__category');
            catalog.changeCategory(category)
        }
    }
})

