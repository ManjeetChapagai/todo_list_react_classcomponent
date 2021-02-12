import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleRemove } = this.props;
    return (
      <div>
        <ul>
          <div>
            <li>{title}</li>
            <li>
              <button onClick={handleRemove}>❌</button>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
