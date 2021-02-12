import React, { Component } from "react";
import Todo from "./Todo_List/Todo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
