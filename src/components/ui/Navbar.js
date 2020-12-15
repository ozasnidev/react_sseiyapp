import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
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
                            to="/login"
                        >
                            Logout
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}