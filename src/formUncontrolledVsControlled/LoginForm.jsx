// tolong buatkan login form di dalem nya erdapat: 
// 1 input type text: atribute name="username"
// 2 input type password: atribute name="password"
// 3 button type="submit"

import React from 'react'

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    console.log(username, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm

// form uncrontrolled component
// uncontrolled component adalah komponen yang tidak mengontrol nilai inputnya melalui state react, melainkan menggunakan DOM untuk mengambil nilai inputnya.