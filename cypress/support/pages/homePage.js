export class HomePage{
  
    constructor() {
        this.producto1 = ".caption>h4>a"
        //this.producto3 = 'div>h4>a[href="prod.html?idp_=5"]';
        this.addCard ="#button-cart";
        this.viewCart=".text-right>a";
        this.checkout=".pull-right>a";
        this.home='.breadcrumb > :nth-child(1)';
       this.card="#cart-total";
      
    };

    

    clickproducto1(variable){
        cy.get(this.producto1).contains(variable).click();
    };
 
 
   
    clickAddCard(){
        cy.get(this.addCard).click();
               
    }

       clickHome(){
        cy.get(this.home).click();
    }

    clickViewCard(){
        cy.get(this.viewCart).contains('View Cart').click();
    }

    clickCheckout(){
        cy.get(this.checkout).click();
    }

    clickCart(){
        cy.get(this.card).click();
    }

};



