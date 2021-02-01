import React, {useRef} from 'react';
import {TodoFormProps} from "../interfaces";

const TodoForm: React.FC<TodoFormProps> = (props) => {
    
    const ref = useRef<HTMLInputElement>(null);

    const handleKeyPress = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        props.onAdd(ref.current!.value);
        ref.current!.value = '';
        }
    };
    return (
      <div className="input-field">
          <input
            ref={ref}
            onKeyPress={handleKeyPress}
            type="text"
            id="title"
            />
            <label htmlFor="title">Add ToDo</label>
      </div>
    )
};

export default TodoForm;
