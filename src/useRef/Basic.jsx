import React, { useRef } from 'react'

function Basic() {
  const inputRef = useRef()

  function fokusInput() {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={fokusInput}>Fokus Input</button>
    </div>
  )
}

export default Basic
