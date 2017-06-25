var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi', () => {
    it('should exist', () => {
        expect(TodoApi).toExist();
    })

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
            id:1,
            text: 'any text',
            completed: false
        }];

        TodoApi.setTodos(todos);
        var actualTodos = JSON.parse(localStorage.getItem('todos'));

        expect(actualTodos).toEqual(todos);
        });
    })

     describe('getTodos', () => {
        
    })
})