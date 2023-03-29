describe('First upload',()=>{


    before(function (){

        cy.visit('https://the-internet.herokuapp.com/upload')

    })

    it('File Upload', ()=>{

        cy.wait(3000)

        cy.get('#file-upload').selectFile('cypress/fixtures/TestPic.png')
        cy.wait(3000)

        cy.get('#file-submit').click()
        cy.screenshot()
    })


})