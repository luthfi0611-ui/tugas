import React from 'react'
// tampilkan data username ke console menggunakan useref

function LoginFormWithUseReff() {
    const usernameRef = React.useRef()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(usernameRef.current.value)

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          ref={usernameRef}
        />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginFormWithUseReff
