import React, { useState } from 'react';
require('dotenv').config()


const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [name, setName] = useState('')
    
    const onsubmit = e => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        setName(username)
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true)
        } else if (username === 'admin') {
            alert('password wrong')
        } else if (password === 'admin') {
            alert('username wrong')
        } else {
            alert('username and password wrong')
        }
    }
    return (
        <div className='container' style={{margin: '50px 0px'}}>
            {
                isLoggedIn ? 
                <div style={{textAlign: 'center'}}>
                    <h1>Hello, {name}</h1>
                </div>
                :
                <div style={{textAlign: 'center'}}>
                    <h1 style={{marginBottom: '20px'}}>Admin Login</h1>
                    <form onSubmit={onsubmit}>
                        <input type="text" id="username" placeholder="Username" style={{marginBottom: '10px', borderRadius: '5px'}} /> <br/>
                        <input type="password" id="password" placeholder="Password" style={{marginBottom: '10px', borderRadius: '5px'}} /> <br/>
                        <button type="submit" style={ { borderRadius: '5px' }}>Login</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Admin;
