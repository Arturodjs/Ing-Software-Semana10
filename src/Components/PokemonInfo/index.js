import React from 'react'

export default function index(props) {
    const { closePopUp, pokemonData, name, img } = props;

    return (
        <>
            <div className="backdrop" onClick={() => closePopUp(bool => bool = false)}></div>
            <div className="infoPokemon container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6 mt-1 d-flex flex-column justify-content-center aling-items-center">
                        <img src={img} alt="" className='img-fluid align-self-center' />
                        <p className='poke-name'>{name}</p>
                    </div>
                    <div className="col-12 col-sm-6  d-flex align-items-center">
                        <div class="row justify-content-center text-dark  d-flex align-items-center w-100">
                            <div class="col-12 ">
                                {pokemonData.stats.map((el, key) => {
                                    return (
                                        <>
                                            <p className='stat-name' key={key}>
                                                {el.stat.name.toUpperCase()}
                                            </p>

                                            <div class="progress" key={key}>
                                                <div class="progress-bar bg-success text-dark font-weight-bold text-white" role="progressbar" style={{ width: `${(el.base_stat * 100) / 160}%` }} aria-valuemax="100">{el.base_stat}</div>
                                            </div>
                                        </>)
                                })}

                            </div>
                        </div>
                    </div>
                    <div className="d-none d-sm-block col-sm-12">
                        <fieldset className="row mx-2">
                            <legend>Other Information</legend>
                            <div className="col-6">
                                <p className='m-0 ms-1'>Type(s): <span>{`${pokemonData.types.map((el, key) => !el.is_hidden ? `${el.type.name}` : '')}`.slice(0)}</span></p>
                            </div>
                            <div className="col-6">
                                <p className='m-0 ms-1'>Abilities: <span>{`${pokemonData.abilities.map((el, key) => !el.is_hidden ? `${el.ability.name}` : '')}`.slice(0, -1)}</span></p>
                            </div>
                            <div className="offset-6 col-6">
                                <p className='m-0 ms-1'>Hidden Ability: <span>{`${pokemonData.abilities.map((el, key) => el.is_hidden ? `${el.ability.name}` : null)}`.slice(1)}</span></p>
                            </div>
                            <div className="col-6">
                                <p className='m-0 ms-1'>Height: <span>{`${pokemonData.height} M.`.slice(1)}</span></p>
                            </div>
                            <div className=" col-6">
                                <p className='m-0 ms-1'>Weight: <span>{`${pokemonData.weight} LBS.`.slice(1)}</span></p>
                            </div>

                        </fieldset>
                    </div>
                </div>

            </div>
        </>
    )
}
