describe('Practice Automation for Register', () => {
  it('Failed Register - Email already exist', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('[type="radio"]').check()
    cy.get('#FirstName').type('syasya')
    cy.get('#LastName').type('sazwana z')
    cy.get('#Email').type('tunyengoleng@gmail.com')
    cy.get('#Password').type('123456')
    cy.get('#ConfirmPassword').type('123456')
    cy.get('#register-button').click()
    cy.get('.validation-summary-errors > ul > li')
  })
})

  it('Success Register - Email already exist', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('[type="radio"]').check()
    cy.get('#FirstName').type('syasya')
    cy.get('#LastName').type('sazwana z')
    cy.get('#Email').type('ayabae51@gmail.com')
    cy.get('#Password').type('123456')
    cy.get('#ConfirmPassword').type('123456')
    cy.get('#register-button').click()
    
  })