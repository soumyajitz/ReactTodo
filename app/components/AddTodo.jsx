var React = require('react');

var AddTodo = React.createClass({
    handleSunmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if(todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSunmit}>
                    <input type="text" ref="todoText" placeholder="Add Todo Item" />
                    <button className="button expanded">Add Todo Item</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;