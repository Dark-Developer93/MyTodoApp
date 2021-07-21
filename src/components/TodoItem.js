import { Component } from "react";

class TodoItem extends Component {
  // const { todo } = this.props;
  render() {
    return (
      <li>
        <input
          type="checkbox"
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          checked={this.props.todo.completed}
        />
        {this.props.todo.title}
      </li>
    );
  }
}
export default TodoItem;
