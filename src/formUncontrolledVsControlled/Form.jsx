import {useState} from 'react'

function Form() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = (event) => {
    event.preventDefault()

    console.log("Username:", username)
    console.log("Password:", password)
}
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm">
            <h1 className='text-2xl font-semibold text-gray-800'>Buat Akun</h1>
            <p className='text-sm text-gray-600 mt-1 mb-6'>Isi lah plisssss</p>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username</label>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'

                        
                    />
                    <p className="text-sm text-gray-600 mt-2">
                        Username: {username}
                    </p>
                </div>
                <div>
                    <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                     <p className="text-sm text-gray-600 mt-2">
                        Password: {password}
                         </p>
                </div>
                <button type="submit" className='w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6'>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Form
