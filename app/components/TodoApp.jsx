var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApi = require('TodoApi');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoApi.getTodos()
        }
    },
    componentDidUpdate: function() {
        TodoApi.setTodos(this.state.todos);
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().format('MMMM Do YYYY, h:mm a'),
                    completedAt: undefined
                }
            ]
        })
    },
    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().format('MMMM Do YYYY, h:mm a') : undefined;
            }

            return todo;
        });

        this.setState({
            todos: updatedTodos
        })
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
               <h1 className= "column small-centered small-11 medium-6 large-5 page-title">TodoList App</h1>
               <div className= "row">
                <div className= "column small-centered small-11 medium-6 large-5">
                    <div>
                        <TodoSearch onSearch={this.handleSearch} />
                        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                        <AddTodo onAddTodo={this.handleAddTodo} />
                    </div>
                </div>
               </div>
            </div>
        )
    }
});

module.exports = TodoApp;