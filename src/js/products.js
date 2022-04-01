export class Catalog{
    constructor(mainClass){
        this.main = document.querySelector(mainClass);
        this.catalogCategories = this.main.querySelectorAll('.catalog__category');
        this.catalogTypes = this.main.querySelectorAll('.catalog__type');
        this.currentPagination = this.main.querySelector('.pagination__link-current');
    }

    changeCategory(target){
        if(target.classList.contains('catalog__category-active')){
            target.classList.remove('catalog__category-active');
            this.deactivateTypes();
            return;
        }
        this.deactivateCategory();
        this.deactivateTypes();
        
        this.activateCategory(target);
        this.activateType(target.dataset.category)
        this.currentPagination.innerText=target.textContent;
    };

    activateType(category){
        this.catalogTypes.forEach(element=>{
            if(element.dataset.category===category){
                element.classList.add('catalog__type-active');
            }
        })
    }

    activateCategory(target){
        target.classList.add('catalog__category-active');
    }

    deactivateCategory(){
        this.catalogCategories.forEach(element => {
            element.classList.remove('catalog__category-active')
        });
    }
    deactivateTypes(){
        this.catalogTypes.forEach(element => {
            element.classList.remove('catalog__type-active')
        });
    }
}