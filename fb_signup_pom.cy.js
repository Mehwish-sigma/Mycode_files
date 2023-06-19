import { Signup_Page } from "./fb_signup_pom"; 

const signup_Page = new Signup_Page() 

it('Signup with right credentials', () => {

    cy.visit('https://facebook.com/')
    cy.get(':nth-child(2) > ._sv4').click()
    signup_Page.clicktosignup()
    signup_Page.wait(3000)

    signup_Page.enterFirstname('Mehwish')    
    signup_Page.enterlastname('Liaquat')
    signup_Page.enteremail('mehwish@getnada.com')
    signup_Page.enterConfirmemail('mehwish@getnada.com')
    signup_Page.enterPassword('123qwerty')
    signup_Page.dob_day('6')
    signup_Page.dob_month('Jun')
    signup_Page.dob_year('1999')
    signup_Page.entergender('1')
    signup_Page.clicksignup()
    
})