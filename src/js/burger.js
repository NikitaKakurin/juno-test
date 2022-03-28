export class Burger{
    constructor(burgerClassName, MenuClassName){
        this.menu = document.querySelector(MenuClassName);
        this.burger = document.querySelector(burgerClassName);
        this.lines = document.querySelectorAll(`${burgerClassName}__line`);
        this.shadow = document.querySelector('.burger_shadow');
        this.isMenuOpen = false;
        this.menuWidth = this.menu?.clientWidth;
    }

    handleClickOnBurger(){
        if(this.isMenuOpen){
            this.closeMenu();
            return;
        }
        this.openMenu();
    }

    openMenu(){
        this.isMenuOpen = true;
        this.menu.style.right='0px';
        this.shadow.classList.add('burger_shadow-show')
        this.changeBurgerButton(this.isMenuOpen)
    };
    
    closeMenu(){
        this.isMenuOpen = false;
        this.menu.style.right=-this.menuWidth +'px';
        this.shadow.classList.remove('burger_shadow-show')
        this.changeBurgerButton(this.isMenuOpen)
    };

    changeBurgerButton(isToOpen) {
        let fun;
        if(isToOpen){
            fun = "add";
        } else{
            fun = "remove";
        }
        this.lines.forEach((elem, index)=>{
            switch (index){
                case 0:
                    elem.classList[fun]("burger-button__line-first");
                    break;
                case 1:
                    elem.classList[fun]("burger-button__line-second");
                    break;
                case 2:
                    elem.classList[fun]("burger-button__line-third");
                    break;
            }
        });
    }


}