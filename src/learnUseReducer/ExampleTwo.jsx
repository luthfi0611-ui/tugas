import React, { useReducer } from 'react'

function reducer(state, action) {
    if (action.type === "pengurangan") {
        return state - 1
    }
    return state
}

function ExampleTwo() {
    const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "pengurangan" })}>
        Kurang 1
      </button>
    </div>
  )
}

export default ExampleTwo
