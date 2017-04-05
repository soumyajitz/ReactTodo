var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos:[
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean yard'
                },
                {
                    id: 3,
                    text: 'Leave mail on porch'
                }, 
                {
                    id: 4,
                    text: 'Close door'
                }
            ]
        }
    },
    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;