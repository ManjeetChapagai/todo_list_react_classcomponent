import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleRemove } = this.props;
    return (
      <div className="form">
        <h1> Todo List</h1>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleRemove={() => handleRemove(item.id)}
            />
          );
        })}

        <button type="button" onClick={clearList}>
          Clear All Items
        </button>
      </div>
    );
  }
}
