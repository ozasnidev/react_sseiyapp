import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {//TODO Apply his own styles. Eventually, Bootstrap styles applied
    const { dispatch } = useContext(AuthContext);
    const onLogin = () => {
        dispatch({
            type: types.login,
            payload: { name: 'Juan' }
        });
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
