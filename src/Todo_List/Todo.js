import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: new Date().getTime().toString(),
    item: "",
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: new Date().getTime().toString(),
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleRemove = (id) => {
    const removedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: removedItems,
    });
  };
  render() {
    return (
      <div>
        <h1> Todo Inputs</h1>
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          items={this.state.items}
          handleRemove={this.handleRemove}
          clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
