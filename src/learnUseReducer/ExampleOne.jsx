import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'tambah':
      return state + 1
    case 'kurangi':
      return state - 1
    case 'reset':
      return 0
    default:
      return state
  }
}

function ExampleOne() {
  const [number, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h1>Angka: {number}</h1>

      <button onClick={() => dispatch({ type: 'tambah' })}>
        Tambah
      </button>

      <button onClick={() => dispatch({ type: 'kurangi' })}>
        Kurangi
      </button>

      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  )
}

export default ExampleOne