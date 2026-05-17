
import React from 'react'
import { useState } from 'react';
const Login = ({handleLogin}) => {

    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);

        setUsername("");
        setPassword("");
    }

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
            <form 
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col items-center">
                <input 
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                required type="text" placeholder="Username" className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                required type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Login
                </button>
            </form>
        </div>
        
        

    </div>
  )
}

export default Login