var React = require('react');
var ReactDOM = require('react-dom');

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },
  
  addItem: function(e) {
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";
    e.preventDefault();
  },

  remove: function() {
    console.log("removing")
  },

  render: function() {
    return (
      <div className="todoListMain">
        <div className="title">
          <form onSubmit={this.addItem}>
            <input ref={ (a) => this._inputElement = a} 
              placeholder="Enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
});

var TodoItems = React.createClass({
  render: function() {
    var todoEntries = this.props.entries;

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }    

    var listItems = todoEntries.map(createTasks);

    return (
      <ul className="list">
        {listItems}
      </ul>
    );
  }
});


ReactDOM.render(<TodoList />, document.getElementById('app'));