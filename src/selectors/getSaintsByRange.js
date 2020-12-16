import { saintsData } from '../data/saints-data';

export const getSaintsByRange = (range) => {
    const validSaintsRange = ['Bronze', 'Silver', 'Gold'];

    if(!validSaintsRange.includes(range)){ throw new Error(`${range} is invalid Saint Range!`);}

    return saintsData.filter( saint => saint.range === range );
};