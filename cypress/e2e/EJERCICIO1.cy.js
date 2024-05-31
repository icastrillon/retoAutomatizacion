import { HomePage } from '../support/pages/homePage'
import { Register} from '../support/pages/register'


describe('Proyecto de prueba- compras de productos', () => {
  let   registerData;
  let shopinData;
before ("before", ()=>{
  cy.fixture('registerData').then(data=>{
    registerData = data;
  });
  
    cy.fixture('shopinData').then(data=>{
      shopinData =data;

  }); 
  
  });


//crear instancia de nuestra clase 

const homePage = new HomePage ();
const register = new Register ();

 before("beforeEach", () => {
     cy.visit('http://opencart.abstracta.us/');
     
 });
 it(" Seleccion de dos productos", () => {

   //•	 Agregar dos productos al carrito
      //selección de los productos
    homePage.clickproducto1(shopinData.primerArticulo.nombre);
    homePage.clickAddCard();
    homePage.clickHome();
    homePage.clickproducto1(shopinData.segundoArticulo.nombre);
    homePage.clickAddCard();
    homePage.clickHome();
    homePage.clickCart();

 // visualizar compra 
    homePage.clickViewCard();
    homePage.clickCheckout();   
    cy.visit('index.php?route=checkout/checkout')
      register.selectGuest ()
      register.selectButtonAccount();
      register.writeName (registerData.name) 
      register.writeLastName (registerData.lastname) 
      register.writeEmail(registerData.email)
      register.writePhone(registerData.telephone)
      register.writeCompany(registerData.company) 
      register.writeAddress1(registerData.address1);
      register.writeAddress2(registerData.address1) ;  
      register.writeCity(registerData.city)
      register.writePostcode(registerData.postcode);  
      register.writeCountry(registerData.country);  
      register.writeZone(registerData.zone) ;
      register.ClickButtonGuest();  
      register.writeInformation(registerData.observation)   
      register.ClickButtonShipping ();  
      register.ClickAcceptTerming ()  
      register.ClickButtonPayment ();  
      register.ClickButtonConfirm () ; 
      register.ClickButtonFinish ();
});

  
});




