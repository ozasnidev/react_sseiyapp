import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ 
    component: Component, 
    isAuthenticated,
    ...rest
}) => { 
    return (
        <Route {...rest} 
            render = { props => 
                (isAuthenticated) ? (<Component {...props} />) : (<Redirect to="/login" />)
            }
        />
    )
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
