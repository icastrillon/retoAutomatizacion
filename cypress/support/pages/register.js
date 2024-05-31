export class Register{
    constructor (){
        this.radio='.radio:nth-child(4) input';
        this.buttonAccount='#button-account';
        this.firstname='#input-payment-firstname';
        this.lastname='#input-payment-lastname';
        this.email='#input-payment-email';
        this.phone='#input-payment-telephone';
        this.company='#input-payment-company';
        this.address1='#input-payment-address-1';
        this.address2='#input-payment-address-2';
        this.city='#input-payment-city';
        this.postcode='#input-payment-postcode';
        this.country='#input-payment-country';          
        this.zone='#input-payment-zone';
        this.buttonGuest='#button-guest';
        this.information='textarea.form-control';
        this.buttonShipping='#button-shipping-method';
        this.acceptTerming='.pull-right > [type="checkbox"]';
        this.buttonPayment='#button-payment-method';
        this.buttonConfirm='#button-confirm';
        this.buttonFinish='.buttons>div>a';
    }


selectGuest (){
    cy.get(this.radio).check()

  
}  

selectButtonAccount(){
    cy.get(this.buttonAccount).click()

}

writeName (name) {
    cy.get(this.firstname).type(name);
}


writeLastName (lastname) {
    cy.get(this.lastname).type(lastname);
}

writeEmail(email) {
    cy.get(this.email).type(email);
}

writePhone(telephone) {
    cy.get(this.phone).type(telephone);
}

writeCompany(company) {
    cy.get(this.company).type(company);
}

writeAddress1(address1) {
    cy.get(this.address1).type(address1);
}


writeAddress2(address1) {
    cy.get(this.address2).type(address1);
}


writeCity(city) {
    cy.get(this.city).type(city);
}

writePostcode(postcode) {
    cy.get(this.postcode).type(postcode);
}

writeCountry(country) {
    cy.get(this.country).select(country).should('have.value','62')
}


writeZone(zone) {
    cy.get(this.zone).select(zone).should('have.value','986')
}


ClickButtonGuest() {
    cy.get(this.buttonGuest).click();
}


writeInformation(observation) {
    cy.get( this.information).type(observation)
}


ClickButtonShipping (){
    cy.get(this.buttonShipping).click();

}

ClickAcceptTerming (){
    cy.get(this.acceptTerming).click();
    
}

ClickButtonPayment (){
    cy.get(this.buttonPayment).click();
    
}

ClickButtonConfirm (){
    cy.get(this.buttonConfirm).click();
    
}

ClickButtonFinish (){
    cy.get(this.buttonFinish).click();
    
}



}