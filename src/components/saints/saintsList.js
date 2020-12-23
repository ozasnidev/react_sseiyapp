import React from 'react'
import { getSaintsByRange } from '../../selectors/getSaintsByRange'
import { SaintCard } from './saintCard';

export const SaintsList = ({ range }) => {
    const saintsFoundedInDataByRange = getSaintsByRange(range);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-2">
                {
                    saintsFoundedInDataByRange.map( saint => (
                        <div className="col" key={saint.id}>
                            <SaintCard 
                                {...saint}
                            />    
                        </div>
                    ))            
                } 
            </div>
        </div>
    )
}
