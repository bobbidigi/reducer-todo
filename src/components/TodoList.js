import React, { useState } from "react";
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => {
  // still using state for form data since it will never be used outside this component
  const [newTodo, setNewTodo] = useState();


  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // empty the form after it submits
    // we can also use a "payload" in our action, to send some values to the reducer
    // we can call dispatch as many times as we want!
    // note on the payload: we use state.newTodo if newTodo is empty
    if(newTodo){
      props.dispatch({ type: "ADD_TODO", payload: newTodo });
    }
    
    setNewTodo("");
  };

console.log('props', props)
  return (
    <div className="list-container">

      <div className="form-container">
        <button onClick={() => props.dispatch({type: "CLEAR_COMPLETED"})}>clear completed</button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="newTodo"
              placeholder={props.item}
              value={newTodo}
              onChange={handleChanges}
            />
            <button type="submit">Save</button>
          </form>
      </div>
      
    <div className="list-row">
        <div className="list">
          <h1>Todos</h1>
          {props.todos.map((item, index)=>{
            return <Todo item={item} dispatch={props.dispatch} key={index}/>
          })}
        </div>

    </div>
        
        
    </div>
  );
};

function mapStateToProps(state){
  return {
    todos: state.todos,
    dispatch: state.dispatch
  } 
}

export default connect(mapStateToProps)(TodoList);
