import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getSaintById } from '../../selectors/getSaintById';

export const SaintsScreen = () => {
    const {saintId} = useParams();
    const saintRequested = getSaintById(saintId);

    if(!saintRequested){
        return <Redirect to="/saint" />
    }

    return (
        <div>
            <h1>Saints Screen</h1>
        </div>
    )
}
