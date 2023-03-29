

describe('Alert test', ()=>{


    beforeEach(()=>{

            cy.visit("https://register.rediff.com/register/register.php")

    })

    it('Test', ()=>{
        //  cy.visit("https://register.rediff.com/register/register.php")
        cy.get('[width="200"] > input').type('Mirajul')
        cy.get('[valign="bottom"] > [type="text"]').type('abc')
        cy.get('.btn_checkavail').click
        cy.wait(3000)
        cy.get('#newpasswd').type('181-15-1897@')
        cy.get('#newpasswd1').type('181-15-1897@')
        cy.get(':nth-child(1) > [width="185"] > input').type('mi@gmail.com')
        cy.get('.nomargin').click

        cy.get('#country').select(15)
        cy.get('[height="45"] > :nth-child(1) > img').screenshot()
        cy.wait(3000)
 
    })


})