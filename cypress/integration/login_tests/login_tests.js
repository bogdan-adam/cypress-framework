describe('Login Test Exense Gmbh', () => {
    it('Open application and login', () => {
      cy.visit('http://localhost:8080/#/root/plans/list')
      cy.contains('Login').click()
      cy.get("a[id='sessionDropdown']")
      .contains(' admin [admin]')
    })
  })