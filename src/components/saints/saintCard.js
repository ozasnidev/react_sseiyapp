import React from 'react';
import { Link } from 'react-router-dom';

export const SaintCard = (saint) => {
    const {id, constellation, name, attack, country} = saint;
    return (
        
        <div className="card ms-3" style={{maxWidth: 540 +'px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/${ id }.jpg`} className="card-img" alt={ name } />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{constellation}</h5>
                        <p className="card-text">{name} <small className="text-muted">({country})</small></p>
                        <p className="card-text">{attack}</p>
                        <Link to={`./saint/${id}`}>Más info...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
