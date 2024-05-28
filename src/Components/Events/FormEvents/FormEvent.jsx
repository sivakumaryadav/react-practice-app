import React, { useState } from 'react'

const FormEvent = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleUserName = (event) => {
        //console.log(event.target.value);
        setUserName(event.target.value);
    }
    const handlePassword = (event) => {
        //console.log(event.target.value);
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: UI validation and server validation
        console.log('UserName', userName);
        console.log('Password', password);
    }

  return (
    <div>
        <h1>Log-in Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='userName'> UserName : 
                    <input id='userName' type='text' placeholder='UserName' value={userName} onChange={handleUserName} required/>
                </label>
            </div>
            <div>
                <label htmlFor='password'> Password : 
                    <input id='password' type='password' placeholder='Password' value={password} onChange={handlePassword} required></input>
                </label>
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default FormEvent