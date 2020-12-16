import React from 'react'
import { getSaintsByRange } from '../../selectors/getSaintsByRange'

export const SaintsList = ({ range }) => {
    const saintsFoundedInDataByRange = getSaintsByRange(range);
    return (
        <ul>
            {
                saintsFoundedInDataByRange.map( saint => (
                    <li key={ saint.id }>
                        { saint.name }
                    </li>
                ))            
            } 
        </ul>
    )
}
