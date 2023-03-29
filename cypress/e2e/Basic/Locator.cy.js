
/// <reference types='Cypress' />
describe('First Test',() =>{

    it('Open url',()=>{
        cy.visit('https://www.guru99.com/')
        cy.title().should('eq', 'Meet Guru99 – Free Training Tutorials & Video for IT Courses')
        cy.wait(5000)
        cy.xpath("//a[contains(text(),'➤ Selenium')]").click()
    })

   
})