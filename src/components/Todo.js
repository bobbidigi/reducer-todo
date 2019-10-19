import React from 'react'

export default function Todo({ item, dispatch}) {

console.log(item)
    return (
            <div className="todo">
                <h3>{item.item}</h3>
            <span>completed: 
                <input type='checkbox' onClick={() => dispatch({type: "UPDATE_TOGGLE", payload: item})}/>
                </span>
            </div>
    )
}
