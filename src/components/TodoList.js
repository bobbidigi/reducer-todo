import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/todo";
import Todo from './Todo'

const TodoList = () => {
  // still using state for form data since it will never be used outside this component
  const [newTodo, setNewTodo] = useState();
  // this hook will hook our state up to our reducer and take care of everything
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // empty the form after it submits
    // we can also use a "payload" in our action, to send some values to the reducer
    // we can call dispatch as many times as we want!
    // note on the payload: we use state.title if newTitle is empty
    dispatch({ type: "ADD_TODO", payload: newTodo });
    // dispatch({ type: "TOGGLE_EDITING" });
    setNewTodo("");
  };

  return (
    <div>

      <div className="form-container">
        <button onClick={() => dispatch({type: "CLEAR_COMPLETED"})}>clear completed</button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="newTodo"
              placeholder={state.item}
              value={newTodo}
              onChange={handleChanges}
            />
            <button type="submit">Save</button>
          </form>
      </div>
      
    
        {state.todos.map((item, index)=>{
          return <Todo item={item} dispatch={dispatch} key={index}/>
        })}
        
        
    </div>
  );
};

export default TodoList;
