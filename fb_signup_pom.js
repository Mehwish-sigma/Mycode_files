export class Signup_Page {

    firstname_text = 'input[name="firstname"]'
    lastname_text = 'input[name="lastname"]'
    email_ = 'input[name="reg_email__"]'
    email_cnfrm = 'input[name="reg_email_confirmation__"]'
    password_ = 'input[name="reg_passwd__"]'
    signup_button = '#u_2_s_n9'

    enterFirstname (firstname){
        cy.get(this.firstname_text).type(firstname);   
    }

    enterlastname (lastname){
        cy.get(this.lastname_text).type(lastname);  
    }

    enteremail (Email){
        cy.get(this.email_).type(Email);   
    }

    enterConfirmemail (){
        cy.get(this.email_cnfrm).type('mehwish@getnada.com')  
    }

    enterPassword (){
        cy.get(this.password_).type('123qwerty');   
    }

    dob_day (day){
        cy.get('#day').select(day).should('have.value','6')                      
    }

    dob_month (month){                   
        cy.get('#month').select(month)             
    }

    dob_year (year){                               
        cy.get('#year').select(year)  
    }

    entergender (gender){
        cy.get('input[type="radio"]').check(gender).should('have.value','1')   
    }
    clicksignup (){
        cy.get(this.signup_button).click() 
    }

    clicktosignup (){
        cy.get('[data-testid="open-registration-form-button"]').click().should('be.visible'); 
    }

    wait (time){
        cy.wait(time)
    }

}