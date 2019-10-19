// import { stat } from "fs";

// set up some initial values for our state
export const initialState = {
  todos: [
    {item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]
}
  
  export function reducer(state, action) {
    // basically a long if-statement over the action types
    switch (action.type) {

      case "CLEAR_COMPLETED":
        return {
          todos: state.todos.filter(todo =>
            !todo.completed)
        };

      case "UPDATE_TOGGLE":
        const filteredTodos = state.todos.map(todo => {
          if(todo.id === action.payload.id){
            return {...todo,  completed: !todo.completed}
          }else{
            return todo
          }
        }) 

        return {
          ...state,
          todos: filteredTodos
        };

      case "ADD_TODO":
        return {
          ...state,
           todos:  [...state.todos,  {
            item: action.payload,
            completed: false,
            id: Date.now()
           } 
          ]
        }
         
      // console.log("dispatch", action.payload)
      default:
        return state;
    }
  }