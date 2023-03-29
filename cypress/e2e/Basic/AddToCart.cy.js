describe('My first Test', ()=>{


    it('title verify',()=>{

        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        cy.wait(3000)

        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
        cy.get('#small-search-box-form > .button-1').click()
        cy.get('.product-title > a').click()

        cy.get('#add-to-cart-button-4').click()
        cy.get('.content > a').click()

        cy.xpath("//span[@class='product-unit-price']").contains("$1,800.00")
        cy.xpath("//span[@class='product-subtotal']").contains("$3,600.00")

    })


})