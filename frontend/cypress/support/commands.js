Cypress.Commands.add("fillingForm", (data)=>{
      cy.get('[name="email"]').type(data.email)
      cy.get('[name="address"]').type(data.address)
      cy.get('[name="city"]').type(data.city)
      cy.get('[name="state"]').select(data.state)
      cy.get('[name="check"]').check()
      cy.get('button')
      .contains('Submit')
      .click()    
})
