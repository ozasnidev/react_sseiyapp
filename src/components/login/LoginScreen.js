import React from 'react'

export const LoginScreen = ({ history }) => {//TODO Apply his own styles. Eventually, Bootstrap styles applied
    const onLogin = () => {
        history.replace('/');
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button className="btn btn-primary" onClick={onLogin} > Login </button>
        </div>
    )
}
