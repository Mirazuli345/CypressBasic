describe('Alert test', ()=>{


    beforeEach(()=>{

            cy.visit("https://the-internet.herokuapp.com/")

    })

    it('Test', ()=>{

        let Dropdown = "//h3[contains(text(),'Dropdown List')]"
        let DynamicContent = "//a[contains(text(),'Dynamic Content')]"
        let ClickHere = "//a[contains(text(),'click here')]"

        
        cy.get(':nth-child(11) > a').click()
        cy.xpath(Dropdown).should('have.text','Dropdown List')

        cy.get('#dropdown').select(1)
        cy.go('back')
        cy.wait(4000)

        cy.xpath(DynamicContent).click()
        cy.xpath(ClickHere)
        cy.wait(3000)
        cy.go('back')
        cy.wait(3000)

        cy.go('forward')


        
  
    })


})