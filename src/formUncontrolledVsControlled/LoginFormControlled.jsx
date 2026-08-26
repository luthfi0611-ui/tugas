import React from 'react'

function LoginFormControlled() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [phone, setPhone] = React.useState('')
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          
        />
        <input 
          type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
        <button type="submit">
          Login
        </button>

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />

        <h2>{username}</h2>
        <h2>{password}</h2>
        <h2>{phone}</h2>
      </form>
    </div>
  )
}

export default LoginFormControlled
