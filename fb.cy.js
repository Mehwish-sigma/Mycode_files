/// <reference types="cypress"/>

describe('Facebook Signup', () => {
    beforeEach(()=> {
        cy.visit('https://facebook.com/');
       // cy.title().should('eq','Google');
        cy.get(':nth-child(2) > ._sv4').click();   // Language change into english
        cy.get('[data-testid="open-registration-form-button"]').click().should('be.visible');    //Click on Sign up button
    }) 

    it('Signup with wrong firstname', () => {

        //Info
        cy.get('input[name="firstname"]').type('mehwish10');                      //wrong FirstName
        cy.get('input[name="lastname"]').type('Liaquat');                         // Surname
        cy.get('input[name="reg_email__"]').type('mehwish@getnada.com');                  //Email
        cy.get('input[name="reg_email_confirmation__"]').type('mehwish@getnada.com');   
        cy.get('input[name="reg_passwd__"]').type('123qwerty');           // Password
        cy.wait(3000)

        //date-of-birth
        cy.get('#day').select('6').should('have.value','6')                      //day
        cy.get('#month').select('May')             //month
        cy.get('#year').select('2000')    //year

        //Gender-selection
        cy.get('input[type="radio"]').check('1').should('have.value','1')  

        cy.get('#u_2_s_n9').click()       //sign up button 

    }) 

    it('Signup with different confirmation mail', () => {

        //Info
        cy.get('input[name="firstname"]').type('mehwish');                      // FirstName
        cy.get('input[name="lastname"]').type('Liaquat');                         // Surname
        cy.get('input[name="reg_email__"]').type('mehwish@getnada.com');                  //Email
        cy.get('input[name="reg_email_confirmation__"]').type('mehish@getnada.com');   // Wrong confirmation mail
        cy.get('input[name="reg_passwd__"]').type('123qwerty');           // Password
        
        //date-of-birth
        cy.get('#day').select('6').should('not.have.value', '6')                      //day
        cy.get('#month').select('May')             //month
        cy.get('#year').select('2000')    //year
        cy.wait(3000)

        //Gender-selection
        cy.get('input[type="radio"]').check('1').should('have.value','1')  

        cy.get('#u_2_s_n9').click()       //sign up button 

    }) 

    it('Signup with wrong/invalid date-of-birth', () => {

        //Info
        cy.get('input[name="firstname"]').type('mehwish');                      // FirstName
        cy.get('input[name="lastname"]').type('Liaquat');                         // Surname
        cy.get('input[name="reg_email__"]').type('mehwish@getnada.com');                  //Email
        cy.get('input[name="reg_email_confirmation__"]').type('mehwish@getnada.com');   
        cy.get('input[name="reg_passwd__"]').type('123qwerty');           // Password
        cy.wait(3000)
        
        //date-of-birth
        cy.get('#day').select('6').should('have.value','32')                      //invalid day
        cy.get('#month').select('May')             //month
        cy.get('#year').select('2000')    //year
        cy.wait(3000)

        //Gender-selection
        cy.get('input[type="radio"]').check('1').should('have.value','1')  

        cy.get('#u_2_s_n9').click().should('be.visible').and('be.visible')       //sign up button 

    }) 

    it('Signup with Email-without-@ ', () => {

        //Info
        cy.get('input[name="firstname"]').type('mehwish');                      // FirstName
        cy.get('input[name="lastname"]').type('Liaquat');                         // Surname
        cy.get('input[name="reg_email__"]').type('mehish@getnada.com');                  //Email
        cy.get('input[name="reg_email_confirmation__"]').type('mehwishgetnada.com');   
        cy.get('input[name="reg_passwd__"]').type('123qwerty');           // Password
        cy.wait(3000)
        
        //date-of-birth
        cy.get('#day').select('6').should('have.value','6')                      //day
        cy.get('#month').select('May')             //month
        cy.get('#year').select('2000')    //year
        cy.wait(3000)

        //Gender-selection
        cy.get('input[type="radio"]').check('1').should('have.value','1')  

        cy.get('#u_2_s_n9').click()       //sign up button 

    }) 

    it('Signup with right credentials', () => {

        //Info
        cy.get('input[name="firstname"]').type('mehwish');                      // FirstName
        cy.get('input[name="lastname"]').type('Liaquat');                         // Surname
        cy.get('input[name="reg_email__"]').type('mehwish@getnada.com');                  //Email
        cy.get('input[name="reg_email_confirmation__"]').type('mehwish@getnada.com');   
        cy.get('input[name="reg_passwd__"]').type('123qwerty');           // Password
        cy.wait(3000)
        
        //date-of-birth
        cy.get('#day').select('6').should('have.value','6')                      //day
        cy.get('#month').select('May')             //month
        cy.get('#year').select('2000')    //year
        cy.wait(3000)

        //Gender-selection
        cy.get('input[type="radio"]').check('1').should('have.value','1')  
        cy.wait(3000)

        cy.get('#u_2_s_n9').click()       //sign up button 

    })    
}) 