import React from 'react';
import { SaintsList } from '../saintsList';

export const BronzeSaints = () => {
    return (
        <div>
            <h1>Bronze Saints</h1>
            <hr />
            <SaintsList range="Bronze" />
        </div>
    )
}
