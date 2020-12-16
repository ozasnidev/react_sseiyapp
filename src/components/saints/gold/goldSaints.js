import React from 'react';
import { SaintsList } from '../saintsList';

export const GoldSaints = () => {
    return (
        <div>
            <h1>Gold Saints</h1>
            <hr />
            <SaintsList range="Gold" />
        </div>
    )
}
