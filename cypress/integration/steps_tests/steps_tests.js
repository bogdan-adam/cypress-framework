
context('Navigating Through Steps', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/#/root/plans/list')
        cy.contains('Login').click()
        cy.get("a[id='sessionDropdown']")
        .contains(' admin [admin]')
    })

    it('Verify User Can Select Plans Tab', () => {
        cy.contains('Plans').click()
        cy.url().should('include', '/root/plans/list')
    })

    it('Verify User Can Select Keywords Tab', () => {
        cy.contains('Keywords').click()
        cy.url().should('include', '/root/functions')
    })
  
    it('Verify User Can Select Parameters Tab', () => {
        cy.contains('Parameters').click()
        cy.url().should('include', '/root/parameters')
    })
  
    it('Verify User Can Select Executions Tab', () => {
        cy.contains('Executions').click()
        cy.url().should('include', '/root/executions/list')
    })
  
    it('Verify User Can Select Scheduler Tab', () => {
        cy.contains('Scheduler').click()
        cy.url().should('include', '/root/scheduler')
    })
  
    it('Verify User Can Select Grid Tab', () => {
        cy.contains('Grid').click()
        cy.url().should('include', '/root/grid/agents')
    })

    it('Verify User Can Select Admin Tab', () => {
        cy.contains('Admin').click()
        cy.url().should('include', '/root/admin/users')
    })
  })
  