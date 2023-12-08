/// <reference types="cypress" />

describe('test home functionality', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
  });
});

describe('todo list functionality', () => {
  it('should create new todo', () => {
    cy.visit('http://localhost:5173/todo');
    cy.get('input.add-todo__input').type('testing cypress');
    cy.get('button.add-todo__button').click();
    cy.get('article').should('have.length.at.least', 1);
    cy.get('p.todo-list__text').contains('testing cypress');
  });
  it('should delete todo', () => {
    cy.visit('http://localhost:5173/todo');
    cy.get('article');
    cy.get('button.todo-list__button').eq(3).click();
  });
});
