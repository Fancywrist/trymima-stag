describe('Sign Up Journey', () => {
  
  it('A succesful signup with all fields filled ', () => {
    cy.visit('/')
    cy.contains('Sign up').should('be.visible').click()
    cy.get('#fullname').should('be.visible').type('basirat aboyeji')
    cy.get('#businessname').type('fancywrist')
    cy.get('[name=businessemail]').type('ridwan@yopmail.com')
    cy.get('#businessphonenumber').type('+2348075265428')
    cy.get('#businessRegNum').type('RC-419419')
    cy.as

  })
})