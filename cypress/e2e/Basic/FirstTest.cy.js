
describe('First Test',() =>{
    it('Open url',()=>{
        cy.visit('https://www.guru99.com/')
        cy.title().should('eq', 'Meet Guru99 – Free Training Tutorials & Video for IT Courses')
        
    })
})