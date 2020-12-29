import React, {useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getSaintById } from '../../selectors/getSaintById';

export const SaintsScreen = ({ history }) => {
    const {saintId} = useParams();
    const saintRequested = useMemo(() =>  getSaintById(saintId), [saintId]);
    const handleClose = () => { history.goBack(); }
    console.log(saintRequested);

    if(!saintRequested){
        return <Redirect to="/saint" />
    }

    return (
        <div className="shadow p-3 mb-5 bg-white rounded  mt-5">
            <div className="row" >
                <div className="col-4" >
                    <img
                        src={`../assets/${saintId}.jpg`}
                        className="img-thumbnail  animate__animated animate__zoomIn"
                        alt={`${saintRequested.name}`}
                    />
                </div>
                <div className="col-8" >
                    <div className="position-relative">
                            <button 
                                type="button" 
                                className="btn-close position-absolute top-0 end-0" 
                                aria-label="Close"
                                onClick={handleClose}
                            />
                    </div>
                    <h2>{saintRequested.constellation}</h2>
                    <p className="fs-4">Nombre: {saintRequested.name} <small className="text-muted">({saintRequested.country})</small></p>
                    <p>Ataque: {saintRequested.attack}</p>
                </div>
            </div>
        </div>
    )
}
