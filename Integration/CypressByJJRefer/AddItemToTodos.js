//const { first } = require("cypress/types/lodash");

const additem = (text) => {
    cy.get('.new-todo').type('${text}{enter}');
};

beforeEach(()=> {
    cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm#')

})
describe('App Initialization', () => {
it('add two items starting with zero',() => {
    additem('firstName');
    additem('SecondName')
    cy.get('li.todo').should('have.length',2)
})
})