import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {
    const { user:{name}, dispatch } = useContext(AuthContext);
    const history = useHistory();
    const handleLogout = () => {
        history.replace('/login');
        dispatch({
            type: types.logout
        });
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Rangos 
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/goldsaints"
                        >
                            Oro
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/silversaints"
                        >
                            Plata
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/bronzesaints"
                        >
                            Bronze
                        </NavLink>
                        
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                        >
                            Buscar
                        </NavLink>
                    </div>
                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>
                        
                    <button 
                        className="nav-item nav-link btn btn-outline-primary" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>  
                </div>
            </div>
        </nav>
    )
}