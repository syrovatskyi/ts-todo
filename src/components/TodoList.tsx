import React from 'react';
import {ITodo} from "../interfaces";

type TodoListProps = {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove
}) => {
  if(todos.length === 0) {
    return <h4 className="center">No to-do yet</h4>
  }
  
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id)
  };
  
  return (
    <ul>
      {
        todos.map(todo => {
          const classes = ['todo-list'];
          if (todo.completed) {
            classes.push('completed');
          }
          return (
            <li className={classes.join(' ')} key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={onToggle.bind(null, todo.id)}
                />
                <span>{todo.title}</span>
                <i
                  className="material-icons red-text"
                  onClick={event => removeHandler(event, todo.id)}
                >
                  delete
                </i>
              </label>
            </li>
          )
        })
      }
    </ul>
    )
};

export default TodoList;
