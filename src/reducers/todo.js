// import { stat } from "fs";

// set up some initial values for our state
const initialState = {
  todos: [
    {item: 'Learn about reducers',
    completed: false,
    id: 3892987589}
  ]
}
  
  export function reducer(state = initialState, action) {
    // basically a long if-statement over the action types
    switch (action.type) {

      case "CLEAR_COMPLETED":
        const newCompletedTodos = state.todos.filter(todo => todo.completed)
        return {
          ...state,
          todos: state.todos.filter(todo => !todo.completed),
          completedTodos: newCompletedTodos
        };

      case "UPDATE_TOGGLE":
        const toggleTodos = state.todos.map(todo => {
          if(todo.id === action.payload.id){
            return {
              ...state,
              ...todo,  completed: !todo.completed
            }
          }else{
            return {
              ...state,
              todo
            }
          }
        }) 

        return {
          todos: [...toggleTodos]
        };

      case "ADD_TODO":
        return {
          // ...state,
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