// (1) Add the overarching describe function
describe('Users App', () => {
  // (2) Add the before each for code to execute
  //     before each test
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  // (3) Write a sanity check test:
  it('works as intended as a sanity check', () => {
    expect(2 + 2).to.equal(4);
  });

  // (4) Add a section with helpers:
  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const checkboxTerms = () => cy.get('input[name="terms"]');
  const submitButton = () => cy.get('button').contains('Submit');

  // (5) Perform key tests:
  it('can type in a name input', () => {
    nameInput()
      .type('Daniel')
      .should('have.value', 'Daniel');
  });

  it('can type in an email input', () => {
    emailInput()
      .type('daniel@gamboa.com')
      .should('have.value', 'daniel@gamboa.com');
  });

  it('can type in a password input', () => {
    passwordInput()
      .type('helloworld')
      .should('have.value', 'helloworld');
  });

  it('can check the terms checkbox', () => {
    checkboxTerms()
      .check()
      .should('be.checked');
  });

  it('can submit a user', () => {
    nameInput().type('Daniel');
    emailInput().type('daniel@gamboa.com');
    passwordInput().type('helloworld');
    checkboxTerms().check();
    submitButton().should('not.be.disabled');
    submitButton().click();
  });

  it('fails to submit a user without a name', () => {
    emailInput().type('daniel@gamboa.com');
    passwordInput().type('helloworld');
    checkboxTerms().check();
    submitButton().should('be.disabled');
  })

});