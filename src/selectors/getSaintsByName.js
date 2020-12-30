import { saintsData } from "../data/saints-data"

export const getSaintsByName = (name = '') => {
    if( name === '') return [];

    name = name.toLowerCase();
    return saintsData.filter(saint => saint.name.toLowerCase().includes(name));
}