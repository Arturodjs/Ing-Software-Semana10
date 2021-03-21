import React from 'react'

export default function index(props) {
    const { id, name, url, getPokemonData, tabIndex } = props;
    const pokemonImg = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return (
        <>
            <div className="d-flex flex-column align-items-center pokemon-card">
                <img alt='' className="img-fluid rounded bg-light" src={pokemonImg} />
                <p>{name}</p>
                <button tabIndex={tabIndex} onClick={(e) => {
                    e.target.blur();
                    getPokemonData(url, name, pokemonImg)
                }
                } className='btn btn btn-outline-pokemon'>See More...</button>
            </div>
        </>
    )
}
