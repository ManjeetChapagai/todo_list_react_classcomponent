import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add Item"
            value={item}
            onChange={handleChange}
          ></input>
          <button type="submit"> Add Item</button>
        </form>
      </div>
    );
  }
}
