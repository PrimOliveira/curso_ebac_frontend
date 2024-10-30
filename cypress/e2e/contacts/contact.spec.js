///<reference types="cypress" />

describe('Teste pagina home', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })
  
    it('Deve testar inclusão de contato', () => {
      cy.get('[type="text"]').type('Rodrigo Santos')
      cy.get('[type="email"]').type('teste@gmail.com')
      cy.get('[type="tel"]').type('11 999999999')
  
      cy.get('.adicionar').click()
    })
  
 

    it('Deve testar edição de contato', () => {
        cy.get('.sc-gueYoa > .edit').last().click()
    
        cy.get('[type="text"]').clear().type('Thiago Lacer')
        cy.get('[type="email"]').clear().type('thi@gmail.com')
        cy.get('[type="tel"]').clear().type('1155555555')
        cy.get('.alterar').click()
      })


      it('Deve testar exclusão de contato', () => {
        cy.get('.sc-iAEyYk .sc-gueYoa .delete').last().click()
      })
  })