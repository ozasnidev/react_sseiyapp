import React from 'react';
import { saintsData } from '../../data/saints-data';
import { SaintCard } from '../saints/saintCard';

export const SearchScreen = () => {
    const saintsFounded = saintsData;
    const handleSearch = () => {
        console.log('???');

    }
    return (
        <div className="container-fluid">
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="position-relative">
                    <div className="col-4 position-relative top-0 start-50 translate-middle-x">
                        <h4>Search Saint</h4>
                        <hr />
                        <form onSubmit={ handleSearch }>
                            <input 
                                type="text"
                                placeholder="Saint a buscar"
                                className="form-control"
                            />
                            <div className="d-grid gap-2 mx-auto">
                                <button 
                                    type="submit"
                                    className="btn m-1 btn-outline-primary"
                                >
                                Buscar
                                </button>
                            </div>
                        </form>
                    </div>  
                </div>
                <h4 className="mt-3 mb-3"> Resultados </h4>
                <div className="row row-cols-3 animate__animated animate__fadeIn">
                    {
                        saintsFounded.map(saint => (
                            <div className="col mt-1 mb-1" key={saint.id}>
                            <SaintCard 
                                {...saint} 
                            />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
