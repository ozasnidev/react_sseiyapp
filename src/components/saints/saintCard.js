import React from 'react';
import { Link } from 'react-router-dom';

export const SaintCard = (saint) => {
    const {id, constellation, name} = saint;
    return (
        
        <div className="card ms-1" style={{maxWidth: 500 +'px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/${ id }.jpg`} className="card-img" alt={ name } />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{constellation}</h5>
                        <p className="card-text">{name} <small className="text-muted"></small></p>
                        <Link to={`./saint/${id}`}>Más info...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
