import { saintsData } from '../data/saints-data';

export const getSaintById = (id) => {
    return saintsData.find( saint => saint.id === id );
};