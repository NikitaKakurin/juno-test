import './style/style.scss';
import {Burger}from './js/burger.js';

window.addEventListener('load', ()=>{
    const burger = new Burger('.burger-button','.navigation__list')
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
            return;
        }
    }
})

