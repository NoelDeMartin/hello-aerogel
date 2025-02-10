import { podUrl, webId } from '@aerogel/cypress';

describe('App', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.solidReset();
    });

    it('Shows get started link', () => {
        // Arrange
        cy.intercept('PATCH', podUrl('/tasks/*')).as('createTask');

        // Act
        cy.ariaInput('Login url').type(`${webId()}{enter}`);
        cy.solidLogin();
        cy.ariaInput('New task').type('Hello Aerogel!{enter}');

        // Assert
        cy.contains('li', 'Hello Aerogel!');

        cy.get('@createTask.all').should('have.length', 1);
        cy.fixture('sparql/create-task.sparql').then((sparql) => {
            cy.get('@createTask.1').its('response.statusCode').should('eq', 201);
            cy.get('@createTask.1').its('request.body').should('be.sparql', sparql);
        });
    });

});
