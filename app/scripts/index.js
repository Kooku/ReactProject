var React = require('react');
var ReactDOM = require('react-dom');

var AddNew = React.createClass({
  render: function () {
    var addNewStyle = {
      position: "relative",
      marginBottom: 15
    }
    var buttonStyle = {
      display: "inline-block",
      marginRight: 10
    };
    var textStyle = {
      display: "inline-block"
    };
    return (
      <div style={addNewStyle}>
        <input type="button" style={buttonStyle} value="Add New" />
        <input className="newTask" type="text" style={textStyle} />
      </div>
    )
  }
});

var Item = React.createClass({
  render: function () {
    var itemStyle = {
      color: "#f56262",
      fontSize: 16,
      position: "relative",
      marginTop: 10
    };
    return (
      <div style={itemStyle}>{this.props.name}</div>
    )
  }
});

var Title = React.createClass({
  render: function () {
    var titleStyle = {
      position: "relative",
      padding: "20px 15px",
      color: "#333",
      fontSize: 32,
      fontWeight: "bold",
      fontFamily: "Helvetica, Arial, sans-serif"
    };
    return (
      <div style={titleStyle}> To Do List </div>
    )
  }
});

var Form = React.createClass({
  render: function () {
    var nameList = this.props.names.map(function(name) {
      return <Item name={name} />;
    });
    var formStyle = {
      position: "relative",
      padding: "15px 20px 20px 20px",
      border: "5px solid #90de96",
      borderRadius: 5      
    };
    return (
      <div style={formStyle}>
        <AddNew />
        {nameList}
      </div>
    )
  }
});

var TodoContainer = React.createClass({
  render: function () {
    var containerStyle = {
      margin: "auto",
      position: "relative",
      width: 500,
      padding: 20,
      borderRadius: 5,
      border: "7px solid #000"
    };  
    var names = ["Example"];
    return (
      <div style={containerStyle}>
      <Title />
      <Form names={names}/>
      </div>
    )
  }
});

ReactDOM.render(<TodoContainer />, document.getElementById('app'));